import { extendType, nonNull, stringArg, objectType, intArg } from 'nexus'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'
import { UserInputError } from 'apollo-server-micro'
import { GraphQLJSON } from 'graphql-type-json'
import { permissions } from '../../permission'

// const { Magic } = require('@magic-sdk/admin')
// const magic = new Magic(process.env.MAGIC_SECRET_KEY)

// export const AuthResponse = objectType({
//   name: 'AuthResponse',
//   definition(t) {
//     t.field('token', { type: 'String' })
//     t.field('user', { type: 'User' })
//     t.field('permission', { type: GraphQLJSON })
//   },
// })

export const AdminQueries = extendType({
  type: 'Query',
  definition(t) {
    t.nullable.field('permission', {
      type: GraphQLJSON,
      resolve: async (_, __, { permission }) => {
        return permission
      },
    })
    t.field('getFilters', {
      type: GraphQLJSON,
      args: {
        modelName: nonNull('String'),
        pagesPath: nonNull(stringArg()),
      },
      resolve: async (_, { modelName, pagesPath }, { prisma, userId, permission, utils }) => {
        if (!userId) return null
        const adminName = utils.capToLowerCase(permission.admin)
        const admin = await prisma[adminName].findUnique({
          where: {
            id: permission[permission.admin],
          },
        })
        const results = []
        for (const key in admin.adminFilters) {
          if (Object.prototype.hasOwnProperty.call(admin.adminFilters, key)) {
            const filter = admin.adminFilters[key]
            if (key.includes(modelName) && key.includes(pagesPath)) {
              results.push(filter)
            }
          }
        }

        return results
      },
    })
  },
})

export const AdminMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('logoutAdmin', {
      type: GraphQLJSON,
      resolve: async (_parent, { }, { userId, prisma, res, permission, JWT_SECRET, utils }) => {
        const oldAdmin = permission.admin
        const { cleanPermission, capToLowerCase } = utils
        const relationModel = permission.parents.find((relationItem) => relationItem.model === permission.admin)

        if (relationModel && relationModel.parent) {
          const permissionItem = permissions.find((per) => per.admin === relationModel.parent)
          const parentRelation = permission.parents.find((relationItem) => relationItem.model === relationModel.parent)
          const authItem = await prisma[capToLowerCase(relationModel.parent)].findUnique({
            where: {
              id: permission[relationModel.parent],
            },
          })
          permission = {
            ...permission,
            name: authItem?.title || authItem?.name || authItem?.username,
            image: authItem?.doImage,
            admin: permissionItem.admin,
            adminParent: parentRelation?.parent,
          }
          if (permissionItem.name === relationModel.model) {
            delete permission[oldAdmin]
          }
          const token = sign({ userId: userId, permission: cleanPermission(permission) }, JWT_SECRET.key)

          return { permission, token }
        } else {
          return null
        }
      },
    })
    t.field('enterAdmin', {
      type: GraphQLJSON,
      args: {
        admin: nonNull('String'),
        id: nonNull(intArg()),
      },
      resolve: async (_parent, { admin, id }, { res, userId, permission, prisma, JWT_SECRET, superAdmin, utils }) => {
        if (!userId) return null
        let authItem
        const modelObject = permission.schema.models.find((model) => model.name === admin)

        await Promise.all(
          permissions.map(async (permissionItem) => {
            if (permissionItem.admin === admin) {
              const relationModel = permission.parents.find((relationItem) => relationItem.model === admin)
              // const modelObject = permission.schema.models.find((model) => model.name === relationModel.model)
              const parentField = modelObject.fields.find(
                (field) => !field.list && field.type === relationModel?.parent,
              )
              if (relationModel.parent) {
                authItem = await prisma[utils.capToLowerCase(relationModel.model)].findFirst({
                  where: {
                    id: {
                      equals: id,
                    },
                    [parentField.name]: {
                      id: {
                        equals: permission[permission.admin],
                      },
                    },
                  },
                })
              }
              if (authItem) {
                permission = {
                  ...permission,
                  admin: permissionItem.admin,
                  [admin]: id,
                  adminParent: relationModel?.parent,
                  image: authItem.doImage,
                  name: authItem.title || authItem.name,
                }
                // Add another admin for checking
                if (permissionItem?.additionalModel) {
                  const additionalModelField = modelObject.fields.find(
                    (field) => field.type === permissionItem.additionalModel,
                  )
                  if (additionalModelField) {
                    permission[permissionItem.additionalModel] = authItem[additionalModelField.name]
                  }
                }
              }
            }
          }),
        )
        const token = sign({ userId: userId, permission: utils.cleanPermission(permission) }, JWT_SECRET.key)

        return { permission, token }
      },
    })
  },
})

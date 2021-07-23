import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('email')
    t.nullable.string('name')
    t.nullable.json('doImage')
    t.nullable.string('password')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('refreshTokens', {
      type: 'RefreshToken',
      args: {
        where: 'RefreshTokenWhereInput',
        orderBy: 'RefreshTokenOrderByInput',
        cursor: 'RefreshTokenWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RefreshTokenScalarFieldEnum',
      },
      resolve(root: any) {
        return root.refreshTokens
      },
    })
    t.list.field('loginTokens', {
      type: 'LoginToken',
      args: {
        where: 'LoginTokenWhereInput',
        orderBy: 'LoginTokenOrderByInput',
        cursor: 'LoginTokenWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'LoginTokenScalarFieldEnum',
      },
      resolve(root: any) {
        return root.loginTokens
      },
    })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
  },
})

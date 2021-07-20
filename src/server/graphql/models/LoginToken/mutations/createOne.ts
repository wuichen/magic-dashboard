import { mutationField, nonNull } from 'nexus'

export const LoginTokenCreateOneMutation = mutationField(
  'createOneLoginToken',
  {
    type: nonNull('LoginToken'),
    args: {
      data: nonNull('LoginTokenCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.loginToken.create({
        data,
        ...select,
      })
    },
  },
)

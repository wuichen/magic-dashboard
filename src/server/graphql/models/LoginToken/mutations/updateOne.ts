import { mutationField, nonNull } from 'nexus'

export const LoginTokenUpdateOneMutation = mutationField(
  'updateOneLoginToken',
  {
    type: nonNull('LoginToken'),
    args: {
      where: nonNull('LoginTokenWhereUniqueInput'),
      data: nonNull('LoginTokenUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.loginToken.update({
        where,
        data,
        ...select,
      })
    },
  },
)

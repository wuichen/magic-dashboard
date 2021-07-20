import { queryField, nonNull, list } from 'nexus'

export const LoginTokenFindManyQuery = queryField('findManyLoginToken', {
  type: nonNull(list(nonNull('LoginToken'))),
  args: {
    where: 'LoginTokenWhereInput',
    orderBy: list('LoginTokenOrderByInput'),
    cursor: 'LoginTokenWhereUniqueInput',
    distinct: 'LoginTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.loginToken.findMany({
      ...args,
      ...select,
    })
  },
})

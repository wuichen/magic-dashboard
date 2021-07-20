import { queryField, list } from 'nexus'

export const LoginTokenFindFirstQuery = queryField('findFirstLoginToken', {
  type: 'LoginToken',
  args: {
    where: 'LoginTokenWhereInput',
    orderBy: list('LoginTokenOrderByInput'),
    cursor: 'LoginTokenWhereUniqueInput',
    distinct: 'LoginTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.loginToken.findFirst({
      ...args,
      ...select,
    })
  },
})

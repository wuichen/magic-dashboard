import { queryField, nonNull, list } from 'nexus'

export const LoginTokenFindCountQuery = queryField('findManyLoginTokenCount', {
  type: nonNull('Int'),
  args: {
    where: 'LoginTokenWhereInput',
    orderBy: list('LoginTokenOrderByInput'),
    cursor: 'LoginTokenWhereUniqueInput',
    distinct: 'LoginTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.loginToken.count(args as any)
  },
})

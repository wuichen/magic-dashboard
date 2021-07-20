import { queryField, list } from 'nexus'

export const LoginTokenAggregateQuery = queryField('aggregateLoginToken', {
  type: 'AggregateLoginToken',
  args: {
    where: 'LoginTokenWhereInput',
    orderBy: list('LoginTokenOrderByInput'),
    cursor: 'LoginTokenWhereUniqueInput',
    distinct: 'LoginTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.loginToken.aggregate({ ...args, ...select }) as any
  },
})

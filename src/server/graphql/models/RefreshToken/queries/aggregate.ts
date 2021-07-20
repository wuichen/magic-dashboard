import { queryField, list } from 'nexus'

export const RefreshTokenAggregateQuery = queryField('aggregateRefreshToken', {
  type: 'AggregateRefreshToken',
  args: {
    where: 'RefreshTokenWhereInput',
    orderBy: list('RefreshTokenOrderByInput'),
    cursor: 'RefreshTokenWhereUniqueInput',
    distinct: 'RefreshTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.refreshToken.aggregate({ ...args, ...select }) as any
  },
})

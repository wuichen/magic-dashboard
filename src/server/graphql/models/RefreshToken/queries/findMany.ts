import { queryField, nonNull, list } from 'nexus'

export const RefreshTokenFindManyQuery = queryField('findManyRefreshToken', {
  type: nonNull(list(nonNull('RefreshToken'))),
  args: {
    where: 'RefreshTokenWhereInput',
    orderBy: list('RefreshTokenOrderByInput'),
    cursor: 'RefreshTokenWhereUniqueInput',
    distinct: 'RefreshTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.refreshToken.findMany({
      ...args,
      ...select,
    })
  },
})

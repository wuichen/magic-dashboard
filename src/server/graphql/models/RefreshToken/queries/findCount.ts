import { queryField, nonNull, list } from 'nexus'

export const RefreshTokenFindCountQuery = queryField(
  'findManyRefreshTokenCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'RefreshTokenWhereInput',
      orderBy: list('RefreshTokenOrderByInput'),
      cursor: 'RefreshTokenWhereUniqueInput',
      distinct: 'RefreshTokenScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.refreshToken.count(args as any)
    },
  },
)

import { queryField, list } from 'nexus'

export const RefreshTokenFindFirstQuery = queryField('findFirstRefreshToken', {
  type: 'RefreshToken',
  args: {
    where: 'RefreshTokenWhereInput',
    orderBy: list('RefreshTokenOrderByInput'),
    cursor: 'RefreshTokenWhereUniqueInput',
    distinct: 'RefreshTokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.refreshToken.findFirst({
      ...args,
      ...select,
    })
  },
})

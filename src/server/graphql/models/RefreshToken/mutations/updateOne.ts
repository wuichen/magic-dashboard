import { mutationField, nonNull } from 'nexus'

export const RefreshTokenUpdateOneMutation = mutationField(
  'updateOneRefreshToken',
  {
    type: nonNull('RefreshToken'),
    args: {
      where: nonNull('RefreshTokenWhereUniqueInput'),
      data: nonNull('RefreshTokenUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.refreshToken.update({
        where,
        data,
        ...select,
      })
    },
  },
)

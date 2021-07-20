import { mutationField, nonNull } from 'nexus'

export const RefreshTokenUpdateManyMutation = mutationField(
  'updateManyRefreshToken',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'RefreshTokenWhereInput',
      data: nonNull('RefreshTokenUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.refreshToken.updateMany(args as any)
    },
  },
)

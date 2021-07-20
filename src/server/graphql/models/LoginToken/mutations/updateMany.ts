import { mutationField, nonNull } from 'nexus'

export const LoginTokenUpdateManyMutation = mutationField(
  'updateManyLoginToken',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LoginTokenWhereInput',
      data: nonNull('LoginTokenUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.loginToken.updateMany(args as any)
    },
  },
)

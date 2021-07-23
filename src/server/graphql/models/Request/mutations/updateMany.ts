import { mutationField, nonNull } from 'nexus'

export const RequestUpdateManyMutation = mutationField('updateManyRequest', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'RequestWhereInput',
    data: nonNull('RequestUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.request.updateMany(args as any)
  },
})

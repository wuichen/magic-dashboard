import { mutationField, nonNull } from 'nexus'

export const ItemDeleteManyMutation = mutationField('deleteManyItem', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ItemWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.item.deleteMany({ where } as any)
  },
})

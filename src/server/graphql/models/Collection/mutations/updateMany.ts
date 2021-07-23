import { mutationField, nonNull } from 'nexus'

export const CollectionUpdateManyMutation = mutationField(
  'updateManyCollection',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CollectionWhereInput',
      data: nonNull('CollectionUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.collection.updateMany(args as any)
    },
  },
)

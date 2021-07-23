import { mutationField, nonNull } from 'nexus'

export const CollectionDeleteManyMutation = mutationField(
  'deleteManyCollection',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CollectionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.collection.deleteMany({ where } as any)
    },
  },
)

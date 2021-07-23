import { mutationField, nonNull } from 'nexus'

export const CollectionDeleteOneMutation = mutationField(
  'deleteOneCollection',
  {
    type: 'Collection',
    args: {
      where: nonNull('CollectionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.collection.delete({
        where,
        ...select,
      })
    },
  },
)

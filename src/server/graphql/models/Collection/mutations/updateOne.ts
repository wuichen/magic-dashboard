import { mutationField, nonNull } from 'nexus'

export const CollectionUpdateOneMutation = mutationField(
  'updateOneCollection',
  {
    type: nonNull('Collection'),
    args: {
      where: nonNull('CollectionWhereUniqueInput'),
      data: nonNull('CollectionUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.collection.update({
        where,
        data,
        ...select,
      })
    },
  },
)

import { mutationField, nonNull } from 'nexus'

export const CollectionCreateOneMutation = mutationField(
  'createOneCollection',
  {
    type: nonNull('Collection'),
    args: {
      data: nonNull('CollectionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.collection.create({
        data,
        ...select,
      })
    },
  },
)

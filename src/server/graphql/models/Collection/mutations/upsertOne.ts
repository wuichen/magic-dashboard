import { mutationField, nonNull } from 'nexus'

export const CollectionUpsertOneMutation = mutationField(
  'upsertOneCollection',
  {
    type: nonNull('Collection'),
    args: {
      where: nonNull('CollectionWhereUniqueInput'),
      create: nonNull('CollectionCreateInput'),
      update: nonNull('CollectionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.collection.upsert({
        ...args,
        ...select,
      })
    },
  },
)

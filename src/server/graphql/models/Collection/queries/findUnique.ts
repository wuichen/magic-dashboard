import { queryField, nonNull } from 'nexus'

export const CollectionFindUniqueQuery = queryField('findUniqueCollection', {
  type: 'Collection',
  args: {
    where: nonNull('CollectionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.collection.findUnique({
      where,
      ...select,
    })
  },
})

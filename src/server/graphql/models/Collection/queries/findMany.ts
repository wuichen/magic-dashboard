import { queryField, nonNull, list } from 'nexus'

export const CollectionFindManyQuery = queryField('findManyCollection', {
  type: nonNull(list(nonNull('Collection'))),
  args: {
    where: 'CollectionWhereInput',
    orderBy: list('CollectionOrderByInput'),
    cursor: 'CollectionWhereUniqueInput',
    distinct: 'CollectionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.collection.findMany({
      ...args,
      ...select,
    })
  },
})

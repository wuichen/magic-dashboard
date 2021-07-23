import { queryField, list } from 'nexus'

export const CollectionFindFirstQuery = queryField('findFirstCollection', {
  type: 'Collection',
  args: {
    where: 'CollectionWhereInput',
    orderBy: list('CollectionOrderByInput'),
    cursor: 'CollectionWhereUniqueInput',
    distinct: 'CollectionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.collection.findFirst({
      ...args,
      ...select,
    })
  },
})

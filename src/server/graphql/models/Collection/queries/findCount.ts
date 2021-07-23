import { queryField, nonNull, list } from 'nexus'

export const CollectionFindCountQuery = queryField('findManyCollectionCount', {
  type: nonNull('Int'),
  args: {
    where: 'CollectionWhereInput',
    orderBy: list('CollectionOrderByInput'),
    cursor: 'CollectionWhereUniqueInput',
    distinct: 'CollectionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.collection.count(args as any)
  },
})

import { queryField, list } from 'nexus'

export const CollectionAggregateQuery = queryField('aggregateCollection', {
  type: 'AggregateCollection',
  args: {
    where: 'CollectionWhereInput',
    orderBy: list('CollectionOrderByInput'),
    cursor: 'CollectionWhereUniqueInput',
    distinct: 'CollectionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.collection.aggregate({ ...args, ...select }) as any
  },
})

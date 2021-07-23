import { queryField, list } from 'nexus'

export const RequestAggregateQuery = queryField('aggregateRequest', {
  type: 'AggregateRequest',
  args: {
    where: 'RequestWhereInput',
    orderBy: list('RequestOrderByInput'),
    cursor: 'RequestWhereUniqueInput',
    distinct: 'RequestScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.request.aggregate({ ...args, ...select }) as any
  },
})

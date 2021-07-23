import { queryField, nonNull, list } from 'nexus'

export const RequestFindManyQuery = queryField('findManyRequest', {
  type: nonNull(list(nonNull('Request'))),
  args: {
    where: 'RequestWhereInput',
    orderBy: list('RequestOrderByInput'),
    cursor: 'RequestWhereUniqueInput',
    distinct: 'RequestScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.request.findMany({
      ...args,
      ...select,
    })
  },
})

import { queryField, nonNull, list } from 'nexus'

export const RequestFindCountQuery = queryField('findManyRequestCount', {
  type: nonNull('Int'),
  args: {
    where: 'RequestWhereInput',
    orderBy: list('RequestOrderByInput'),
    cursor: 'RequestWhereUniqueInput',
    distinct: 'RequestScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.request.count(args as any)
  },
})

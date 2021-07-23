import { queryField, list } from 'nexus'

export const RequestFindFirstQuery = queryField('findFirstRequest', {
  type: 'Request',
  args: {
    where: 'RequestWhereInput',
    orderBy: list('RequestOrderByInput'),
    cursor: 'RequestWhereUniqueInput',
    distinct: 'RequestScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.request.findFirst({
      ...args,
      ...select,
    })
  },
})

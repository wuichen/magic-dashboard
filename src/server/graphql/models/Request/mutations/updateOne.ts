import { mutationField, nonNull } from 'nexus'

export const RequestUpdateOneMutation = mutationField('updateOneRequest', {
  type: nonNull('Request'),
  args: {
    where: nonNull('RequestWhereUniqueInput'),
    data: nonNull('RequestUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.request.update({
      where,
      data,
      ...select,
    })
  },
})

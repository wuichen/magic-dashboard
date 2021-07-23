import { mutationField, nonNull } from 'nexus'

export const StoryUpdateOneMutation = mutationField('updateOneStory', {
  type: nonNull('Story'),
  args: {
    where: nonNull('StoryWhereUniqueInput'),
    data: nonNull('StoryUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.story.update({
      where,
      data,
      ...select,
    })
  },
})

import { queryField, nonNull } from 'nexus'

export const StoryFindUniqueQuery = queryField('findUniqueStory', {
  type: 'Story',
  args: {
    where: nonNull('StoryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.story.findUnique({
      where,
      ...select,
    })
  },
})

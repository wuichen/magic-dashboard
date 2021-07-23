import { queryField, list } from 'nexus'

export const StoryFindFirstQuery = queryField('findFirstStory', {
  type: 'Story',
  args: {
    where: 'StoryWhereInput',
    orderBy: list('StoryOrderByInput'),
    cursor: 'StoryWhereUniqueInput',
    distinct: 'StoryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.story.findFirst({
      ...args,
      ...select,
    })
  },
})

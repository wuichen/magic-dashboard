import { queryField, nonNull, list } from 'nexus'

export const StoryFindManyQuery = queryField('findManyStory', {
  type: nonNull(list(nonNull('Story'))),
  args: {
    where: 'StoryWhereInput',
    orderBy: list('StoryOrderByInput'),
    cursor: 'StoryWhereUniqueInput',
    distinct: 'StoryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.story.findMany({
      ...args,
      ...select,
    })
  },
})

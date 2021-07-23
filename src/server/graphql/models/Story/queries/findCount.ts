import { queryField, nonNull, list } from 'nexus'

export const StoryFindCountQuery = queryField('findManyStoryCount', {
  type: nonNull('Int'),
  args: {
    where: 'StoryWhereInput',
    orderBy: list('StoryOrderByInput'),
    cursor: 'StoryWhereUniqueInput',
    distinct: 'StoryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.story.count(args as any)
  },
})

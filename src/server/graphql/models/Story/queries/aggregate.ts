import { queryField, list } from 'nexus'

export const StoryAggregateQuery = queryField('aggregateStory', {
  type: 'AggregateStory',
  args: {
    where: 'StoryWhereInput',
    orderBy: list('StoryOrderByInput'),
    cursor: 'StoryWhereUniqueInput',
    distinct: 'StoryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.story.aggregate({ ...args, ...select }) as any
  },
})

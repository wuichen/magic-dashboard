import { mutationField, nonNull } from 'nexus'

export const StoryDeleteManyMutation = mutationField('deleteManyStory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StoryWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.story.deleteMany({ where } as any)
  },
})

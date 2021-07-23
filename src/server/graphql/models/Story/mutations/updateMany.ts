import { mutationField, nonNull } from 'nexus'

export const StoryUpdateManyMutation = mutationField('updateManyStory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StoryWhereInput',
    data: nonNull('StoryUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.story.updateMany(args as any)
  },
})

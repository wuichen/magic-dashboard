import { mutationField, nonNull } from 'nexus'

export const StoryDeleteOneMutation = mutationField('deleteOneStory', {
  type: 'Story',
  args: {
    where: nonNull('StoryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.story.delete({
      where,
      ...select,
    })
  },
})

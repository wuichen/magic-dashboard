import { mutationField, nonNull } from 'nexus'

export const StoryUpsertOneMutation = mutationField('upsertOneStory', {
  type: nonNull('Story'),
  args: {
    where: nonNull('StoryWhereUniqueInput'),
    create: nonNull('StoryCreateInput'),
    update: nonNull('StoryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.story.upsert({
      ...args,
      ...select,
    })
  },
})

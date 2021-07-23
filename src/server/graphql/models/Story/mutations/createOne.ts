import { mutationField, nonNull } from 'nexus'

export const StoryCreateOneMutation = mutationField('createOneStory', {
  type: nonNull('Story'),
  args: {
    data: nonNull('StoryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.story.create({
      data,
      ...select,
    })
  },
})

import { objectType } from 'nexus'

export const Collection = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Collection',
  definition(t) {
    t.string('id')
    t.string('name')
    t.nullable.string('description')
    t.nullable.json('doImage')
    t.list.field('stories', {
      type: 'Story',
      args: {
        where: 'StoryWhereInput',
        orderBy: 'StoryOrderByInput',
        cursor: 'StoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'StoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.stories
      },
    })
    t.list.string('storyOrder')
  },
})

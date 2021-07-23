import { objectType } from 'nexus'

export const Item = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Item',
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
  },
})

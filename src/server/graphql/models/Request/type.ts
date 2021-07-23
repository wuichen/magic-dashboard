import { objectType } from 'nexus'

export const Request = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Request',
  definition(t) {
    t.string('id')
    t.string('name')
    t.field('story', {
      type: 'Story',
      resolve(root: any) {
        return root.story
      },
    })
    t.string('storyId')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
  },
})

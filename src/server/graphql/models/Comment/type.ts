import { objectType } from 'nexus'

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.string('id')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.string('userId')
    t.field('request', {
      type: 'Request',
      resolve(root: any) {
        return root.request
      },
    })
    t.string('requestId')
    t.field('messageType', { type: 'MessageType' })
    t.string('message')
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

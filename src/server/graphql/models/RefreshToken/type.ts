import { objectType } from 'nexus'

export const RefreshToken = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'RefreshToken',
  definition(t) {
    t.string('loginTokenId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.string('userId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('expires', { type: 'DateTime' })
    t.string('value')
    t.field('lastActive', { type: 'DateTime' })
    t.string('ip')
    t.string('userAgent')
    t.string('userAgentRaw')
    t.json('geo')
  },
})

import { objectType } from 'nexus'

export const LoginToken = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'LoginToken',
  definition(t) {
    t.int('id')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
    t.boolean('approved')
    t.field('expires', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.string('email')
    t.string('secret')
    t.string('ip')
    t.string('userAgent')
    t.string('userAgentRaw')
    t.json('geo')
    t.string('domain')
  },
})

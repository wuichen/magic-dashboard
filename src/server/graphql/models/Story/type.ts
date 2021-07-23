import { objectType } from 'nexus'

export const Story = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Story',
  definition(t) {
    t.string('id')
    t.string('name')
    t.nullable.string('description')
    t.nullable.json('doImage')
    t.field('collection', {
      type: 'Collection',
      resolve(root: any) {
        return root.collection
      },
    })
    t.string('collectionId')
    t.list.field('items', {
      type: 'Item',
      args: {
        where: 'ItemWhereInput',
        orderBy: 'ItemOrderByInput',
        cursor: 'ItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ItemScalarFieldEnum',
      },
      resolve(root: any) {
        return root.items
      },
    })
    t.list.field('requests', {
      type: 'Request',
      args: {
        where: 'RequestWhereInput',
        orderBy: 'RequestOrderByInput',
        cursor: 'RequestWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RequestScalarFieldEnum',
      },
      resolve(root: any) {
        return root.requests
      },
    })
    t.list.string('itemIds')
  },
})

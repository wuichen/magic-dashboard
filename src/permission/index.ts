import { default as publicSchema } from './public.json';

import CollectionParents from './admin/Collection/relations.json';
import CollectionSchema from './admin/Collection/schema.json';
import CollectionModelLimits from './admin/Collection/modelLimits.json';

import UserParents from './admin/User/relations.json';
import UserSchema from './admin/User/schema.json';
import UserModelLimits from './admin/User/modelLimits.json';

export const permissions = [
  {
    admin: 'Public',
    schema: publicSchema,
    parents: [],
  },
  {
    admin: 'Collection',
    schema: CollectionSchema,
    modelLimits: CollectionModelLimits,
    parents: CollectionParents,
  },
  {
    admin: 'User',
    schema: UserSchema,
    modelLimits: UserModelLimits,
    parents: UserParents,
  },
];

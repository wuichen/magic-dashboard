import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateCollection = {
  __typename?: 'AggregateCollection';
  _count?: Maybe<CollectionCountAggregateOutputType>;
  _max?: Maybe<CollectionMaxAggregateOutputType>;
  _min?: Maybe<CollectionMinAggregateOutputType>;
  count?: Maybe<CollectionCountAggregateOutputType>;
  max?: Maybe<CollectionMaxAggregateOutputType>;
  min?: Maybe<CollectionMinAggregateOutputType>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count?: Maybe<CommentCountAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  count?: Maybe<CommentCountAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
};

export type AggregateItem = {
  __typename?: 'AggregateItem';
  _count?: Maybe<ItemCountAggregateOutputType>;
  _max?: Maybe<ItemMaxAggregateOutputType>;
  _min?: Maybe<ItemMinAggregateOutputType>;
  count?: Maybe<ItemCountAggregateOutputType>;
  max?: Maybe<ItemMaxAggregateOutputType>;
  min?: Maybe<ItemMinAggregateOutputType>;
};

export type AggregateLoginToken = {
  __typename?: 'AggregateLoginToken';
  _count?: Maybe<LoginTokenCountAggregateOutputType>;
  _max?: Maybe<LoginTokenMaxAggregateOutputType>;
  _min?: Maybe<LoginTokenMinAggregateOutputType>;
  count?: Maybe<LoginTokenCountAggregateOutputType>;
  max?: Maybe<LoginTokenMaxAggregateOutputType>;
  min?: Maybe<LoginTokenMinAggregateOutputType>;
};

export type AggregateRefreshToken = {
  __typename?: 'AggregateRefreshToken';
  _count?: Maybe<RefreshTokenCountAggregateOutputType>;
  _max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  _min?: Maybe<RefreshTokenMinAggregateOutputType>;
  count?: Maybe<RefreshTokenCountAggregateOutputType>;
  max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  min?: Maybe<RefreshTokenMinAggregateOutputType>;
};

export type AggregateRequest = {
  __typename?: 'AggregateRequest';
  _count?: Maybe<RequestCountAggregateOutputType>;
  _max?: Maybe<RequestMaxAggregateOutputType>;
  _min?: Maybe<RequestMinAggregateOutputType>;
  count?: Maybe<RequestCountAggregateOutputType>;
  max?: Maybe<RequestMaxAggregateOutputType>;
  min?: Maybe<RequestMinAggregateOutputType>;
};

export type AggregateStory = {
  __typename?: 'AggregateStory';
  _count?: Maybe<StoryCountAggregateOutputType>;
  _max?: Maybe<StoryMaxAggregateOutputType>;
  _min?: Maybe<StoryMinAggregateOutputType>;
  count?: Maybe<StoryCountAggregateOutputType>;
  max?: Maybe<StoryMaxAggregateOutputType>;
  min?: Maybe<StoryMinAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Collection = {
  __typename?: 'Collection';
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id: Scalars['String'];
  name: Scalars['String'];
  stories: Array<Story>;
  storyOrder: Array<Scalars['String']>;
};


export type CollectionStoriesArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<StoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};

export type CollectionCountAggregateOutputType = {
  __typename?: 'CollectionCountAggregateOutputType';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  doImage: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  storyOrder: Scalars['Int'];
};

export type CollectionCreateInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stories?: Maybe<StoryCreateNestedManyWithoutCollectionInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionCreateManyInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionCreateManystoryOrderInput = {
  set: Scalars['String'];
};

export type CollectionCreateNestedOneWithoutStoriesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutStoriesInput>;
  create?: Maybe<CollectionUncheckedCreateWithoutStoriesInput>;
};

export type CollectionCreateOrConnectWithoutStoriesInput = {
  create: CollectionUncheckedCreateWithoutStoriesInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateWithoutStoriesInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionCreatestoryOrderInput = {
  set: Scalars['String'];
};

export type CollectionMaxAggregateOutputType = {
  __typename?: 'CollectionMaxAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CollectionMinAggregateOutputType = {
  __typename?: 'CollectionMinAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CollectionOrderByInput = {
  description?: Maybe<SortOrder>;
  doImage?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  storyOrder?: Maybe<SortOrder>;
};

export type CollectionRelationFilter = {
  is?: Maybe<CollectionWhereInput>;
  isNot?: Maybe<CollectionWhereInput>;
};

export enum CollectionScalarFieldEnum {
  Description = 'description',
  DoImage = 'doImage',
  Id = 'id',
  Name = 'name',
  StoryOrder = 'storyOrder'
}

export type CollectionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CollectionScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CollectionScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CollectionScalarWhereWithAggregatesInput>>>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  doImage?: Maybe<JsonNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  storyOrder?: Maybe<StringNullableListFilter>;
};

export type CollectionUncheckedCreateInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stories?: Maybe<StoryUncheckedCreateNestedManyWithoutCollectionInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUncheckedCreateWithoutStoriesInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUncheckedUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stories?: Maybe<StoryUncheckedUpdateManyWithoutCollectionInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUncheckedUpdateManyInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUncheckedUpdateWithoutStoriesInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stories?: Maybe<StoryUpdateManyWithoutCollectionInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUpdateOneRequiredWithoutStoriesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutStoriesInput>;
  create?: Maybe<CollectionUncheckedCreateWithoutStoriesInput>;
  update?: Maybe<CollectionUncheckedUpdateWithoutStoriesInput>;
  upsert?: Maybe<CollectionUpsertWithoutStoriesInput>;
};

export type CollectionUpdateWithoutStoriesInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  storyOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUpdatestoryOrderInput = {
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CollectionUpsertWithoutStoriesInput = {
  create: CollectionUncheckedCreateWithoutStoriesInput;
  update: CollectionUncheckedUpdateWithoutStoriesInput;
};

export type CollectionWhereInput = {
  AND?: Maybe<Array<Maybe<CollectionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CollectionWhereInput>>>;
  OR?: Maybe<Array<Maybe<CollectionWhereInput>>>;
  description?: Maybe<StringNullableFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  stories?: Maybe<StoryListRelationFilter>;
  storyOrder?: Maybe<StringNullableListFilter>;
};

export type CollectionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  message: Scalars['String'];
  messageType: MessageType;
  request: Request;
  requestId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  messageType: Scalars['Int'];
  requestId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  request: RequestCreateNestedOneWithoutCommentsInput;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  requestId: Scalars['String'];
  userId: Scalars['String'];
};

export type CommentCreateManyRequestInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  userId: Scalars['String'];
};

export type CommentCreateManyRequestInputEnvelope = {
  data: CommentCreateManyRequestInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  requestId: Scalars['String'];
};

export type CommentCreateManyUserInputEnvelope = {
  data: CommentCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutRequestInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutRequestInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutRequestInput>>>;
  createMany?: Maybe<CommentCreateManyRequestInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutUserInput>>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutRequestInput = {
  create: CommentUncheckedCreateWithoutRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentUncheckedCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutRequestInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  request: RequestCreateNestedOneWithoutCommentsInput;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  messageType?: Maybe<MessageType>;
  requestId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  messageType?: Maybe<MessageType>;
  requestId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  message?: Maybe<SortOrder>;
  messageType?: Maybe<SortOrder>;
  requestId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  MessageType = 'messageType',
  RequestId = 'requestId',
  UserId = 'userId'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  message?: Maybe<StringFilter>;
  messageType?: Maybe<EnumMessageTypeFilter>;
  requestId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  message?: Maybe<StringWithAggregatesFilter>;
  messageType?: Maybe<EnumMessageTypeWithAggregatesFilter>;
  requestId?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type CommentUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  requestId: Scalars['String'];
  userId: Scalars['String'];
};

export type CommentUncheckedCreateNestedManyWithoutRequestInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutRequestInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutRequestInput>>>;
  createMany?: Maybe<CommentCreateManyRequestInputEnvelope>;
};

export type CommentUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutUserInput>>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentUncheckedCreateWithoutRequestInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  userId: Scalars['String'];
};

export type CommentUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  messageType: MessageType;
  requestId: Scalars['String'];
};

export type CommentUncheckedUpdateInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  requestId?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  requestId?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  requestId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutRequestInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutRequestInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutRequestInput>>>;
  createMany?: Maybe<CommentCreateManyRequestInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutRequestInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutRequestInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutRequestInput>>>;
};

export type CommentUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutUserInput>>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CommentUncheckedUpdateWithoutRequestInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  requestId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  request?: Maybe<RequestUpdateOneRequiredWithoutCommentsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutRequestInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutRequestInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutRequestInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutRequestInput>>>;
  createMany?: Maybe<CommentCreateManyRequestInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutRequestInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutRequestInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutRequestInput>>>;
};

export type CommentUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutUserInput>>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type CommentUpdateWithWhereUniqueWithoutRequestInput = {
  data: CommentUncheckedUpdateWithoutRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUncheckedUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutRequestInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutUserInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  messageType?: Maybe<EnumMessageTypeFieldUpdateOperationsInput>;
  request?: Maybe<RequestUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutRequestInput = {
  create: CommentUncheckedCreateWithoutRequestInput;
  update: CommentUncheckedUpdateWithoutRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentUncheckedCreateWithoutUserInput;
  update: CommentUncheckedUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<Maybe<CommentWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentWhereInput>>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  message?: Maybe<StringFilter>;
  messageType?: Maybe<EnumMessageTypeFilter>;
  request?: Maybe<RequestWhereInput>;
  requestId?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeNullableFilter>;
  min?: Maybe<NestedDateTimeNullableFilter>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type EnumMessageTypeFieldUpdateOperationsInput = {
  set?: Maybe<MessageType>;
};

export type EnumMessageTypeFilter = {
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<Maybe<MessageType>>>;
  not?: Maybe<NestedEnumMessageTypeFilter>;
  notIn?: Maybe<Array<Maybe<MessageType>>>;
};

export type EnumMessageTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumMessageTypeFilter>;
  _min?: Maybe<NestedEnumMessageTypeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<Maybe<MessageType>>>;
  max?: Maybe<NestedEnumMessageTypeFilter>;
  min?: Maybe<NestedEnumMessageTypeFilter>;
  not?: Maybe<NestedEnumMessageTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MessageType>>>;
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id: Scalars['String'];
  name: Scalars['String'];
  stories: Array<Story>;
};


export type ItemStoriesArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<StoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};

export type ItemCountAggregateOutputType = {
  __typename?: 'ItemCountAggregateOutputType';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  doImage: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ItemCreateInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stories?: Maybe<StoryCreateNestedManyWithoutItemsInput>;
};

export type ItemCreateManyInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ItemCreateNestedManyWithoutStoriesInput = {
  connect?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ItemCreateOrConnectWithoutStoriesInput>>>;
  create?: Maybe<Array<Maybe<ItemCreateWithoutStoriesInput>>>;
};

export type ItemCreateOrConnectWithoutStoriesInput = {
  create: ItemUncheckedCreateWithoutStoriesInput;
  where: ItemWhereUniqueInput;
};

export type ItemCreateWithoutStoriesInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ItemListRelationFilter = {
  every?: Maybe<ItemWhereInput>;
  none?: Maybe<ItemWhereInput>;
  some?: Maybe<ItemWhereInput>;
};

export type ItemMaxAggregateOutputType = {
  __typename?: 'ItemMaxAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ItemMinAggregateOutputType = {
  __typename?: 'ItemMinAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ItemOrderByInput = {
  description?: Maybe<SortOrder>;
  doImage?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export enum ItemScalarFieldEnum {
  Description = 'description',
  DoImage = 'doImage',
  Id = 'id',
  Name = 'name'
}

export type ItemScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ItemScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ItemScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemScalarWhereInput>>>;
  description?: Maybe<StringNullableFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type ItemScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ItemScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ItemScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ItemScalarWhereWithAggregatesInput>>>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  doImage?: Maybe<JsonNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type ItemUncheckedCreateInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ItemUncheckedCreateWithoutStoriesInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ItemUncheckedUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUncheckedUpdateManyInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUncheckedUpdateManyWithoutItemsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUncheckedUpdateWithoutStoriesInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUpdateInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stories?: Maybe<StoryUpdateManyWithoutItemsInput>;
};

export type ItemUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUpdateManyWithWhereWithoutStoriesInput = {
  data: ItemUncheckedUpdateManyWithoutItemsInput;
  where: ItemScalarWhereInput;
};

export type ItemUpdateManyWithoutStoriesInput = {
  connect?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ItemCreateOrConnectWithoutStoriesInput>>>;
  create?: Maybe<Array<Maybe<ItemCreateWithoutStoriesInput>>>;
  delete?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ItemScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ItemWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ItemUpdateWithWhereUniqueWithoutStoriesInput>>>;
  updateMany?: Maybe<Array<Maybe<ItemUpdateManyWithWhereWithoutStoriesInput>>>;
  upsert?: Maybe<Array<Maybe<ItemUpsertWithWhereUniqueWithoutStoriesInput>>>;
};

export type ItemUpdateWithWhereUniqueWithoutStoriesInput = {
  data: ItemUncheckedUpdateWithoutStoriesInput;
  where: ItemWhereUniqueInput;
};

export type ItemUpdateWithoutStoriesInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ItemUpsertWithWhereUniqueWithoutStoriesInput = {
  create: ItemUncheckedCreateWithoutStoriesInput;
  update: ItemUncheckedUpdateWithoutStoriesInput;
  where: ItemWhereUniqueInput;
};

export type ItemWhereInput = {
  AND?: Maybe<Array<Maybe<ItemWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemWhereInput>>>;
  description?: Maybe<StringNullableFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  stories?: Maybe<StoryListRelationFilter>;
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};



export type JsonFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedJsonNullableFilter>;
  _min?: Maybe<NestedJsonNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Json']>;
  max?: Maybe<NestedJsonNullableFilter>;
  min?: Maybe<NestedJsonNullableFilter>;
  not?: Maybe<Scalars['Json']>;
};

export type JsonWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedJsonFilter>;
  _min?: Maybe<NestedJsonFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Json']>;
  max?: Maybe<NestedJsonFilter>;
  min?: Maybe<NestedJsonFilter>;
  not?: Maybe<Scalars['Json']>;
};

export type LoginToken = {
  __typename?: 'LoginToken';
  approved: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id: Scalars['String'];
  ip: Scalars['String'];
  secret: Scalars['String'];
  user: User;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginTokenCountAggregateOutputType = {
  __typename?: 'LoginTokenCountAggregateOutputType';
  _all: Scalars['Int'];
  approved: Scalars['Int'];
  createdAt: Scalars['Int'];
  domain: Scalars['Int'];
  email: Scalars['Int'];
  expires: Scalars['Int'];
  geo: Scalars['Int'];
  id: Scalars['Int'];
  ip: Scalars['Int'];
  secret: Scalars['Int'];
  userAgent: Scalars['Int'];
  userAgentRaw: Scalars['Int'];
  userId: Scalars['Int'];
};

export type LoginTokenCreateInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  user: UserCreateNestedOneWithoutLoginTokensInput;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
};

export type LoginTokenCreateManyInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginTokenCreateManyUserInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
};

export type LoginTokenCreateManyUserInputEnvelope = {
  data: LoginTokenCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LoginTokenCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LoginTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<LoginTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<LoginTokenCreateManyUserInputEnvelope>;
};

export type LoginTokenCreateOrConnectWithoutUserInput = {
  create: LoginTokenUncheckedCreateWithoutUserInput;
  where: LoginTokenWhereUniqueInput;
};

export type LoginTokenCreateWithoutUserInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
};

export type LoginTokenListRelationFilter = {
  every?: Maybe<LoginTokenWhereInput>;
  none?: Maybe<LoginTokenWhereInput>;
  some?: Maybe<LoginTokenWhereInput>;
};

export type LoginTokenMaxAggregateOutputType = {
  __typename?: 'LoginTokenMaxAggregateOutputType';
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type LoginTokenMinAggregateOutputType = {
  __typename?: 'LoginTokenMinAggregateOutputType';
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type LoginTokenOrderByInput = {
  approved?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  domain?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  geo?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  secret?: Maybe<SortOrder>;
  userAgent?: Maybe<SortOrder>;
  userAgentRaw?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum LoginTokenScalarFieldEnum {
  Approved = 'approved',
  CreatedAt = 'createdAt',
  Domain = 'domain',
  Email = 'email',
  Expires = 'expires',
  Geo = 'geo',
  Id = 'id',
  Ip = 'ip',
  Secret = 'secret',
  UserAgent = 'userAgent',
  UserAgentRaw = 'userAgentRaw',
  UserId = 'userId'
}

export type LoginTokenScalarWhereInput = {
  AND?: Maybe<Array<Maybe<LoginTokenScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LoginTokenScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<LoginTokenScalarWhereInput>>>;
  approved?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  domain?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  expires?: Maybe<DateTimeFilter>;
  geo?: Maybe<JsonFilter>;
  id?: Maybe<StringFilter>;
  ip?: Maybe<StringFilter>;
  secret?: Maybe<StringFilter>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type LoginTokenScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<LoginTokenScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<LoginTokenScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<LoginTokenScalarWhereWithAggregatesInput>>>;
  approved?: Maybe<BoolWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  domain?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  geo?: Maybe<JsonWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  ip?: Maybe<StringWithAggregatesFilter>;
  secret?: Maybe<StringWithAggregatesFilter>;
  userAgent?: Maybe<StringWithAggregatesFilter>;
  userAgentRaw?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type LoginTokenUncheckedCreateInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginTokenUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LoginTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<LoginTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<LoginTokenCreateManyUserInputEnvelope>;
};

export type LoginTokenUncheckedCreateWithoutUserInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['String']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
};

export type LoginTokenUncheckedUpdateInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUncheckedUpdateManyInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUncheckedUpdateManyWithoutLoginTokensInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LoginTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<LoginTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<LoginTokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LoginTokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LoginTokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<LoginTokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<LoginTokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type LoginTokenUncheckedUpdateWithoutUserInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUpdateInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutLoginTokensInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUpdateManyMutationInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUpdateManyWithWhereWithoutUserInput = {
  data: LoginTokenUncheckedUpdateManyWithoutLoginTokensInput;
  where: LoginTokenScalarWhereInput;
};

export type LoginTokenUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LoginTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<LoginTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<LoginTokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LoginTokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LoginTokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LoginTokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<LoginTokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<LoginTokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type LoginTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: LoginTokenUncheckedUpdateWithoutUserInput;
  where: LoginTokenWhereUniqueInput;
};

export type LoginTokenUpdateWithoutUserInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
};

export type LoginTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: LoginTokenUncheckedCreateWithoutUserInput;
  update: LoginTokenUncheckedUpdateWithoutUserInput;
  where: LoginTokenWhereUniqueInput;
};

export type LoginTokenWhereInput = {
  AND?: Maybe<Array<Maybe<LoginTokenWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LoginTokenWhereInput>>>;
  OR?: Maybe<Array<Maybe<LoginTokenWhereInput>>>;
  approved?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  domain?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  expires?: Maybe<DateTimeFilter>;
  geo?: Maybe<JsonFilter>;
  id?: Maybe<StringFilter>;
  ip?: Maybe<StringFilter>;
  secret?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type LoginTokenWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum MessageType {
  Image = 'image',
  Text = 'text'
}

export type Mutation = {
  __typename?: 'Mutation';
  createOneCollection: Collection;
  createOneComment: Comment;
  createOneItem: Item;
  createOneLoginToken: LoginToken;
  createOneRefreshToken: RefreshToken;
  createOneRequest: Request;
  createOneStory: Story;
  createOneUser: User;
  deleteManyCollection: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyItem: BatchPayload;
  deleteManyLoginToken: BatchPayload;
  deleteManyRefreshToken: BatchPayload;
  deleteManyRequest: BatchPayload;
  deleteManyStory: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCollection?: Maybe<Collection>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneItem?: Maybe<Item>;
  deleteOneLoginToken?: Maybe<LoginToken>;
  deleteOneRefreshToken?: Maybe<RefreshToken>;
  deleteOneRequest?: Maybe<Request>;
  deleteOneStory?: Maybe<Story>;
  deleteOneUser?: Maybe<User>;
  enterAdmin?: Maybe<Scalars['JSON']>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  logoutAdmin?: Maybe<Scalars['JSON']>;
  signup?: Maybe<User>;
  updateManyCollection: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyItem: BatchPayload;
  updateManyLoginToken: BatchPayload;
  updateManyRefreshToken: BatchPayload;
  updateManyRequest: BatchPayload;
  updateManyStory: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneCollection: Collection;
  updateOneComment: Comment;
  updateOneItem: Item;
  updateOneLoginToken: LoginToken;
  updateOneRefreshToken: RefreshToken;
  updateOneRequest: Request;
  updateOneStory: Story;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneCollection: Collection;
  upsertOneComment: Comment;
  upsertOneItem: Item;
  upsertOneLoginToken: LoginToken;
  upsertOneRefreshToken: RefreshToken;
  upsertOneRequest: Request;
  upsertOneStory: Story;
  upsertOneUser: User;
};


export type MutationCreateOneCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneItemArgs = {
  data: ItemCreateInput;
};


export type MutationCreateOneLoginTokenArgs = {
  data: LoginTokenCreateInput;
};


export type MutationCreateOneRefreshTokenArgs = {
  data: RefreshTokenCreateInput;
};


export type MutationCreateOneRequestArgs = {
  data: RequestCreateInput;
};


export type MutationCreateOneStoryArgs = {
  data: StoryCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCollectionArgs = {
  where?: Maybe<CollectionWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyItemArgs = {
  where?: Maybe<ItemWhereInput>;
};


export type MutationDeleteManyLoginTokenArgs = {
  where?: Maybe<LoginTokenWhereInput>;
};


export type MutationDeleteManyRefreshTokenArgs = {
  where?: Maybe<RefreshTokenWhereInput>;
};


export type MutationDeleteManyRequestArgs = {
  where?: Maybe<RequestWhereInput>;
};


export type MutationDeleteManyStoryArgs = {
  where?: Maybe<StoryWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneItemArgs = {
  where: ItemWhereUniqueInput;
};


export type MutationDeleteOneLoginTokenArgs = {
  where: LoginTokenWhereUniqueInput;
};


export type MutationDeleteOneRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput;
};


export type MutationDeleteOneRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type MutationDeleteOneStoryArgs = {
  where: StoryWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationEnterAdminArgs = {
  admin: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateManyCollectionArgs = {
  data: CollectionUpdateManyMutationInput;
  where?: Maybe<CollectionWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyItemArgs = {
  data: ItemUpdateManyMutationInput;
  where?: Maybe<ItemWhereInput>;
};


export type MutationUpdateManyLoginTokenArgs = {
  data: LoginTokenUpdateManyMutationInput;
  where?: Maybe<LoginTokenWhereInput>;
};


export type MutationUpdateManyRefreshTokenArgs = {
  data: RefreshTokenUpdateManyMutationInput;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type MutationUpdateManyRequestArgs = {
  data: RequestUpdateManyMutationInput;
  where?: Maybe<RequestWhereInput>;
};


export type MutationUpdateManyStoryArgs = {
  data: StoryUpdateManyMutationInput;
  where?: Maybe<StoryWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneCollectionArgs = {
  data: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneItemArgs = {
  data: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpdateOneLoginTokenArgs = {
  data: LoginTokenUpdateInput;
  where: LoginTokenWhereUniqueInput;
};


export type MutationUpdateOneRefreshTokenArgs = {
  data: RefreshTokenUpdateInput;
  where: RefreshTokenWhereUniqueInput;
};


export type MutationUpdateOneRequestArgs = {
  data: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};


export type MutationUpdateOneStoryArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneCollectionArgs = {
  create: CollectionCreateInput;
  update: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneItemArgs = {
  create: ItemCreateInput;
  update: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpsertOneLoginTokenArgs = {
  create: LoginTokenCreateInput;
  update: LoginTokenUpdateInput;
  where: LoginTokenWhereUniqueInput;
};


export type MutationUpsertOneRefreshTokenArgs = {
  create: RefreshTokenCreateInput;
  update: RefreshTokenUpdateInput;
  where: RefreshTokenWhereUniqueInput;
};


export type MutationUpsertOneRequestArgs = {
  create: RequestCreateInput;
  update: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};


export type MutationUpsertOneStoryArgs = {
  create: StoryCreateInput;
  update: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeNullableFilter>;
  min?: Maybe<NestedDateTimeNullableFilter>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumMessageTypeFilter = {
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<Maybe<MessageType>>>;
  not?: Maybe<NestedEnumMessageTypeFilter>;
  notIn?: Maybe<Array<Maybe<MessageType>>>;
};

export type NestedEnumMessageTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumMessageTypeFilter>;
  _min?: Maybe<NestedEnumMessageTypeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<Maybe<MessageType>>>;
  max?: Maybe<NestedEnumMessageTypeFilter>;
  min?: Maybe<NestedEnumMessageTypeFilter>;
  not?: Maybe<NestedEnumMessageTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MessageType>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type NestedJsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCollection?: Maybe<AggregateCollection>;
  aggregateComment?: Maybe<AggregateComment>;
  aggregateItem?: Maybe<AggregateItem>;
  aggregateLoginToken?: Maybe<AggregateLoginToken>;
  aggregateRefreshToken?: Maybe<AggregateRefreshToken>;
  aggregateRequest?: Maybe<AggregateRequest>;
  aggregateStory?: Maybe<AggregateStory>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCollection?: Maybe<Collection>;
  findFirstComment?: Maybe<Comment>;
  findFirstItem?: Maybe<Item>;
  findFirstLoginToken?: Maybe<LoginToken>;
  findFirstRefreshToken?: Maybe<RefreshToken>;
  findFirstRequest?: Maybe<Request>;
  findFirstStory?: Maybe<Story>;
  findFirstUser?: Maybe<User>;
  findManyCollection: Array<Collection>;
  findManyCollectionCount: Scalars['Int'];
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyItem: Array<Item>;
  findManyItemCount: Scalars['Int'];
  findManyLoginToken: Array<LoginToken>;
  findManyLoginTokenCount: Scalars['Int'];
  findManyRefreshToken: Array<RefreshToken>;
  findManyRefreshTokenCount: Scalars['Int'];
  findManyRequest: Array<Request>;
  findManyRequestCount: Scalars['Int'];
  findManyStory: Array<Story>;
  findManyStoryCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCollection?: Maybe<Collection>;
  findUniqueComment?: Maybe<Comment>;
  findUniqueItem?: Maybe<Item>;
  findUniqueLoginToken?: Maybe<LoginToken>;
  findUniqueRefreshToken?: Maybe<RefreshToken>;
  findUniqueRequest?: Maybe<Request>;
  findUniqueStory?: Maybe<Story>;
  findUniqueUser?: Maybe<User>;
  getFilters?: Maybe<Scalars['JSON']>;
  me?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']>;
};


export type QueryAggregateCollectionArgs = {
  cursor?: Maybe<CollectionWhereUniqueInput>;
  distinct?: Maybe<CollectionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CollectionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryAggregateItemArgs = {
  cursor?: Maybe<ItemWhereUniqueInput>;
  distinct?: Maybe<ItemScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ItemOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ItemWhereInput>;
};


export type QueryAggregateLoginTokenArgs = {
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  distinct?: Maybe<LoginTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LoginTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LoginTokenWhereInput>;
};


export type QueryAggregateRefreshTokenArgs = {
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  distinct?: Maybe<RefreshTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RefreshTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type QueryAggregateRequestArgs = {
  cursor?: Maybe<RequestWhereUniqueInput>;
  distinct?: Maybe<RequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RequestWhereInput>;
};


export type QueryAggregateStoryArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<StoryOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstCollectionArgs = {
  cursor?: Maybe<CollectionWhereUniqueInput>;
  distinct?: Maybe<CollectionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CollectionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindFirstItemArgs = {
  cursor?: Maybe<ItemWhereUniqueInput>;
  distinct?: Maybe<ItemScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ItemOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ItemWhereInput>;
};


export type QueryFindFirstLoginTokenArgs = {
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  distinct?: Maybe<LoginTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LoginTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LoginTokenWhereInput>;
};


export type QueryFindFirstRefreshTokenArgs = {
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  distinct?: Maybe<RefreshTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RefreshTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type QueryFindFirstRequestArgs = {
  cursor?: Maybe<RequestWhereUniqueInput>;
  distinct?: Maybe<RequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RequestWhereInput>;
};


export type QueryFindFirstStoryArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<StoryOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyCollectionArgs = {
  cursor?: Maybe<CollectionWhereUniqueInput>;
  distinct?: Maybe<CollectionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CollectionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionWhereInput>;
};


export type QueryFindManyCollectionCountArgs = {
  cursor?: Maybe<CollectionWhereUniqueInput>;
  distinct?: Maybe<CollectionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CollectionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyItemArgs = {
  cursor?: Maybe<ItemWhereUniqueInput>;
  distinct?: Maybe<ItemScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ItemOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ItemWhereInput>;
};


export type QueryFindManyItemCountArgs = {
  cursor?: Maybe<ItemWhereUniqueInput>;
  distinct?: Maybe<ItemScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ItemOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ItemWhereInput>;
};


export type QueryFindManyLoginTokenArgs = {
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  distinct?: Maybe<LoginTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LoginTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LoginTokenWhereInput>;
};


export type QueryFindManyLoginTokenCountArgs = {
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  distinct?: Maybe<LoginTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LoginTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LoginTokenWhereInput>;
};


export type QueryFindManyRefreshTokenArgs = {
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  distinct?: Maybe<RefreshTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RefreshTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type QueryFindManyRefreshTokenCountArgs = {
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  distinct?: Maybe<RefreshTokenScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RefreshTokenOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type QueryFindManyRequestArgs = {
  cursor?: Maybe<RequestWhereUniqueInput>;
  distinct?: Maybe<RequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RequestWhereInput>;
};


export type QueryFindManyRequestCountArgs = {
  cursor?: Maybe<RequestWhereUniqueInput>;
  distinct?: Maybe<RequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<RequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RequestWhereInput>;
};


export type QueryFindManyStoryArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<StoryOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};


export type QueryFindManyStoryCountArgs = {
  cursor?: Maybe<StoryWhereUniqueInput>;
  distinct?: Maybe<StoryScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<StoryOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoryWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueItemArgs = {
  where: ItemWhereUniqueInput;
};


export type QueryFindUniqueLoginTokenArgs = {
  where: LoginTokenWhereUniqueInput;
};


export type QueryFindUniqueRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput;
};


export type QueryFindUniqueRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type QueryFindUniqueStoryArgs = {
  where: StoryWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetFiltersArgs = {
  modelName: Scalars['String'];
  pagesPath: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive: Scalars['DateTime'];
  loginTokenId: Scalars['String'];
  user: User;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenCountAggregateOutputType = {
  __typename?: 'RefreshTokenCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expires: Scalars['Int'];
  geo: Scalars['Int'];
  ip: Scalars['Int'];
  lastActive: Scalars['Int'];
  loginTokenId: Scalars['Int'];
  userAgent: Scalars['Int'];
  userAgentRaw: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type RefreshTokenCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  user: UserCreateNestedOneWithoutRefreshTokensInput;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: RefreshTokenCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RefreshTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<RefreshTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenUncheckedCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenListRelationFilter = {
  every?: Maybe<RefreshTokenWhereInput>;
  none?: Maybe<RefreshTokenWhereInput>;
  some?: Maybe<RefreshTokenWhereInput>;
};

export type RefreshTokenMaxAggregateOutputType = {
  __typename?: 'RefreshTokenMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  ip?: Maybe<Scalars['String']>;
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type RefreshTokenMinAggregateOutputType = {
  __typename?: 'RefreshTokenMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  ip?: Maybe<Scalars['String']>;
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type RefreshTokenOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  geo?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  lastActive?: Maybe<SortOrder>;
  loginTokenId?: Maybe<SortOrder>;
  userAgent?: Maybe<SortOrder>;
  userAgentRaw?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export enum RefreshTokenScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Geo = 'geo',
  Ip = 'ip',
  LastActive = 'lastActive',
  LoginTokenId = 'loginTokenId',
  UserAgent = 'userAgent',
  UserAgentRaw = 'userAgentRaw',
  UserId = 'userId',
  Value = 'value'
}

export type RefreshTokenScalarWhereInput = {
  AND?: Maybe<Array<Maybe<RefreshTokenScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<RefreshTokenScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<RefreshTokenScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  geo?: Maybe<JsonFilter>;
  ip?: Maybe<StringFilter>;
  lastActive?: Maybe<DateTimeFilter>;
  loginTokenId?: Maybe<StringFilter>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type RefreshTokenScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<RefreshTokenScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<RefreshTokenScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<RefreshTokenScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  geo?: Maybe<JsonWithAggregatesFilter>;
  ip?: Maybe<StringWithAggregatesFilter>;
  lastActive?: Maybe<DateTimeWithAggregatesFilter>;
  loginTokenId?: Maybe<StringWithAggregatesFilter>;
  userAgent?: Maybe<StringWithAggregatesFilter>;
  userAgentRaw?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
  value?: Maybe<StringWithAggregatesFilter>;
};

export type RefreshTokenUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RefreshTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<RefreshTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  value: Scalars['String'];
};

export type RefreshTokenUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RefreshTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<RefreshTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<RefreshTokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<RefreshTokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type RefreshTokenUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutRefreshTokensInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  data: RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput;
  where: RefreshTokenScalarWhereInput;
};

export type RefreshTokenUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RefreshTokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<RefreshTokenCreateWithoutUserInput>>>;
  createMany?: Maybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<RefreshTokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<RefreshTokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<RefreshTokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: RefreshTokenUncheckedUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: RefreshTokenUncheckedCreateWithoutUserInput;
  update: RefreshTokenUncheckedUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenWhereInput = {
  AND?: Maybe<Array<Maybe<RefreshTokenWhereInput>>>;
  NOT?: Maybe<Array<Maybe<RefreshTokenWhereInput>>>;
  OR?: Maybe<Array<Maybe<RefreshTokenWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  geo?: Maybe<JsonFilter>;
  ip?: Maybe<StringFilter>;
  lastActive?: Maybe<DateTimeFilter>;
  loginTokenId?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  loginTokenId?: Maybe<Scalars['String']>;
};

export type Request = {
  __typename?: 'Request';
  comments: Array<Comment>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  story: Story;
  storyId: Scalars['String'];
};


export type RequestCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type RequestCountAggregateOutputType = {
  __typename?: 'RequestCountAggregateOutputType';
  _all: Scalars['Int'];
  endDate: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  startDate: Scalars['Int'];
  storyId: Scalars['Int'];
};

export type RequestCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutRequestInput>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  story: StoryCreateNestedOneWithoutRequestsInput;
};

export type RequestCreateManyInput = {
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  storyId: Scalars['String'];
};

export type RequestCreateManyStoryInput = {
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type RequestCreateManyStoryInputEnvelope = {
  data: RequestCreateManyStoryInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RequestCreateNestedManyWithoutStoryInput = {
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RequestCreateOrConnectWithoutStoryInput>>>;
  create?: Maybe<Array<Maybe<RequestCreateWithoutStoryInput>>>;
  createMany?: Maybe<RequestCreateManyStoryInputEnvelope>;
};

export type RequestCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<RequestWhereUniqueInput>;
  connectOrCreate?: Maybe<RequestCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<RequestUncheckedCreateWithoutCommentsInput>;
};

export type RequestCreateOrConnectWithoutCommentsInput = {
  create: RequestUncheckedCreateWithoutCommentsInput;
  where: RequestWhereUniqueInput;
};

export type RequestCreateOrConnectWithoutStoryInput = {
  create: RequestUncheckedCreateWithoutStoryInput;
  where: RequestWhereUniqueInput;
};

export type RequestCreateWithoutCommentsInput = {
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  story: StoryCreateNestedOneWithoutRequestsInput;
};

export type RequestCreateWithoutStoryInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutRequestInput>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type RequestListRelationFilter = {
  every?: Maybe<RequestWhereInput>;
  none?: Maybe<RequestWhereInput>;
  some?: Maybe<RequestWhereInput>;
};

export type RequestMaxAggregateOutputType = {
  __typename?: 'RequestMaxAggregateOutputType';
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  storyId?: Maybe<Scalars['String']>;
};

export type RequestMinAggregateOutputType = {
  __typename?: 'RequestMinAggregateOutputType';
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  storyId?: Maybe<Scalars['String']>;
};

export type RequestOrderByInput = {
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  storyId?: Maybe<SortOrder>;
};

export type RequestRelationFilter = {
  is?: Maybe<RequestWhereInput>;
  isNot?: Maybe<RequestWhereInput>;
};

export enum RequestScalarFieldEnum {
  EndDate = 'endDate',
  Id = 'id',
  Name = 'name',
  StartDate = 'startDate',
  StoryId = 'storyId'
}

export type RequestScalarWhereInput = {
  AND?: Maybe<Array<Maybe<RequestScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<RequestScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<RequestScalarWhereInput>>>;
  endDate?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  startDate?: Maybe<DateTimeNullableFilter>;
  storyId?: Maybe<StringFilter>;
};

export type RequestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<RequestScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<RequestScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<RequestScalarWhereWithAggregatesInput>>>;
  endDate?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  startDate?: Maybe<DateTimeNullableWithAggregatesFilter>;
  storyId?: Maybe<StringWithAggregatesFilter>;
};

export type RequestUncheckedCreateInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutRequestInput>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  storyId: Scalars['String'];
};

export type RequestUncheckedCreateNestedManyWithoutStoryInput = {
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RequestCreateOrConnectWithoutStoryInput>>>;
  create?: Maybe<Array<Maybe<RequestCreateWithoutStoryInput>>>;
  createMany?: Maybe<RequestCreateManyStoryInputEnvelope>;
};

export type RequestUncheckedCreateWithoutCommentsInput = {
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  storyId: Scalars['String'];
};

export type RequestUncheckedCreateWithoutStoryInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutRequestInput>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type RequestUncheckedUpdateInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutRequestInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  storyId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RequestUncheckedUpdateManyInput = {
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  storyId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RequestUncheckedUpdateManyWithoutRequestsInput = {
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RequestUncheckedUpdateManyWithoutStoryInput = {
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RequestCreateOrConnectWithoutStoryInput>>>;
  create?: Maybe<Array<Maybe<RequestCreateWithoutStoryInput>>>;
  createMany?: Maybe<RequestCreateManyStoryInputEnvelope>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<RequestScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<RequestUpdateWithWhereUniqueWithoutStoryInput>>>;
  updateMany?: Maybe<Array<Maybe<RequestUpdateManyWithWhereWithoutStoryInput>>>;
  upsert?: Maybe<Array<Maybe<RequestUpsertWithWhereUniqueWithoutStoryInput>>>;
};

export type RequestUncheckedUpdateWithoutCommentsInput = {
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  storyId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RequestUncheckedUpdateWithoutStoryInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutRequestInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RequestUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutRequestInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  story?: Maybe<StoryUpdateOneRequiredWithoutRequestsInput>;
};

export type RequestUpdateManyMutationInput = {
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RequestUpdateManyWithWhereWithoutStoryInput = {
  data: RequestUncheckedUpdateManyWithoutRequestsInput;
  where: RequestScalarWhereInput;
};

export type RequestUpdateManyWithoutStoryInput = {
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<RequestCreateOrConnectWithoutStoryInput>>>;
  create?: Maybe<Array<Maybe<RequestCreateWithoutStoryInput>>>;
  createMany?: Maybe<RequestCreateManyStoryInputEnvelope>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<RequestScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<RequestUpdateWithWhereUniqueWithoutStoryInput>>>;
  updateMany?: Maybe<Array<Maybe<RequestUpdateManyWithWhereWithoutStoryInput>>>;
  upsert?: Maybe<Array<Maybe<RequestUpsertWithWhereUniqueWithoutStoryInput>>>;
};

export type RequestUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<RequestWhereUniqueInput>;
  connectOrCreate?: Maybe<RequestCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<RequestUncheckedCreateWithoutCommentsInput>;
  update?: Maybe<RequestUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<RequestUpsertWithoutCommentsInput>;
};

export type RequestUpdateWithWhereUniqueWithoutStoryInput = {
  data: RequestUncheckedUpdateWithoutStoryInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpdateWithoutCommentsInput = {
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  story?: Maybe<StoryUpdateOneRequiredWithoutRequestsInput>;
};

export type RequestUpdateWithoutStoryInput = {
  comments?: Maybe<CommentUpdateManyWithoutRequestInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RequestUpsertWithWhereUniqueWithoutStoryInput = {
  create: RequestUncheckedCreateWithoutStoryInput;
  update: RequestUncheckedUpdateWithoutStoryInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpsertWithoutCommentsInput = {
  create: RequestUncheckedCreateWithoutCommentsInput;
  update: RequestUncheckedUpdateWithoutCommentsInput;
};

export type RequestWhereInput = {
  AND?: Maybe<Array<Maybe<RequestWhereInput>>>;
  NOT?: Maybe<Array<Maybe<RequestWhereInput>>>;
  OR?: Maybe<Array<Maybe<RequestWhereInput>>>;
  comments?: Maybe<CommentListRelationFilter>;
  endDate?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  startDate?: Maybe<DateTimeNullableFilter>;
  story?: Maybe<StoryWhereInput>;
  storyId?: Maybe<StringFilter>;
};

export type RequestWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Story = {
  __typename?: 'Story';
  collection: Collection;
  collectionId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id: Scalars['String'];
  itemIds: Array<Scalars['String']>;
  items: Array<Item>;
  name: Scalars['String'];
  requests: Array<Request>;
};


export type StoryItemsArgs = {
  cursor?: Maybe<ItemWhereUniqueInput>;
  distinct?: Maybe<ItemScalarFieldEnum>;
  orderBy?: Maybe<ItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ItemWhereInput>;
};


export type StoryRequestsArgs = {
  cursor?: Maybe<RequestWhereUniqueInput>;
  distinct?: Maybe<RequestScalarFieldEnum>;
  orderBy?: Maybe<RequestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RequestWhereInput>;
};

export type StoryCountAggregateOutputType = {
  __typename?: 'StoryCountAggregateOutputType';
  _all: Scalars['Int'];
  collectionId: Scalars['Int'];
  description: Scalars['Int'];
  doImage: Scalars['Int'];
  id: Scalars['Int'];
  itemIds: Scalars['Int'];
  name: Scalars['Int'];
};

export type StoryCreateInput = {
  collection: CollectionCreateNestedOneWithoutStoriesInput;
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemCreateNestedManyWithoutStoriesInput>;
  name: Scalars['String'];
  requests?: Maybe<RequestCreateNestedManyWithoutStoryInput>;
};

export type StoryCreateManyCollectionInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type StoryCreateManyCollectionInputEnvelope = {
  data: StoryCreateManyCollectionInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StoryCreateManyInput = {
  collectionId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type StoryCreateManyitemIdsInput = {
  set: Scalars['String'];
};

export type StoryCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutCollectionInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutCollectionInput>>>;
  createMany?: Maybe<StoryCreateManyCollectionInputEnvelope>;
};

export type StoryCreateNestedManyWithoutItemsInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutItemsInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutItemsInput>>>;
};

export type StoryCreateNestedOneWithoutRequestsInput = {
  connect?: Maybe<StoryWhereUniqueInput>;
  connectOrCreate?: Maybe<StoryCreateOrConnectWithoutRequestsInput>;
  create?: Maybe<StoryUncheckedCreateWithoutRequestsInput>;
};

export type StoryCreateOrConnectWithoutCollectionInput = {
  create: StoryUncheckedCreateWithoutCollectionInput;
  where: StoryWhereUniqueInput;
};

export type StoryCreateOrConnectWithoutItemsInput = {
  create: StoryUncheckedCreateWithoutItemsInput;
  where: StoryWhereUniqueInput;
};

export type StoryCreateOrConnectWithoutRequestsInput = {
  create: StoryUncheckedCreateWithoutRequestsInput;
  where: StoryWhereUniqueInput;
};

export type StoryCreateWithoutCollectionInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemCreateNestedManyWithoutStoriesInput>;
  name: Scalars['String'];
  requests?: Maybe<RequestCreateNestedManyWithoutStoryInput>;
};

export type StoryCreateWithoutItemsInput = {
  collection: CollectionCreateNestedOneWithoutStoriesInput;
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  requests?: Maybe<RequestCreateNestedManyWithoutStoryInput>;
};

export type StoryCreateWithoutRequestsInput = {
  collection: CollectionCreateNestedOneWithoutStoriesInput;
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemCreateNestedManyWithoutStoriesInput>;
  name: Scalars['String'];
};

export type StoryCreateitemIdsInput = {
  set: Scalars['String'];
};

export type StoryListRelationFilter = {
  every?: Maybe<StoryWhereInput>;
  none?: Maybe<StoryWhereInput>;
  some?: Maybe<StoryWhereInput>;
};

export type StoryMaxAggregateOutputType = {
  __typename?: 'StoryMaxAggregateOutputType';
  collectionId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StoryMinAggregateOutputType = {
  __typename?: 'StoryMinAggregateOutputType';
  collectionId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StoryOrderByInput = {
  collectionId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  doImage?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemIds?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type StoryRelationFilter = {
  is?: Maybe<StoryWhereInput>;
  isNot?: Maybe<StoryWhereInput>;
};

export enum StoryScalarFieldEnum {
  CollectionId = 'collectionId',
  Description = 'description',
  DoImage = 'doImage',
  Id = 'id',
  ItemIds = 'itemIds',
  Name = 'name'
}

export type StoryScalarWhereInput = {
  AND?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  collectionId?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  itemIds?: Maybe<StringNullableListFilter>;
  name?: Maybe<StringFilter>;
};

export type StoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<StoryScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<StoryScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<StoryScalarWhereWithAggregatesInput>>>;
  collectionId?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  doImage?: Maybe<JsonNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  itemIds?: Maybe<StringNullableListFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type StoryUncheckedCreateInput = {
  collectionId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  requests?: Maybe<RequestUncheckedCreateNestedManyWithoutStoryInput>;
};

export type StoryUncheckedCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutCollectionInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutCollectionInput>>>;
  createMany?: Maybe<StoryCreateManyCollectionInputEnvelope>;
};

export type StoryUncheckedCreateWithoutCollectionInput = {
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  requests?: Maybe<RequestUncheckedCreateNestedManyWithoutStoryInput>;
};

export type StoryUncheckedCreateWithoutItemsInput = {
  collectionId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  requests?: Maybe<RequestUncheckedCreateNestedManyWithoutStoryInput>;
};

export type StoryUncheckedCreateWithoutRequestsInput = {
  collectionId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<Scalars['String']>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type StoryUncheckedUpdateInput = {
  collectionId?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUncheckedUpdateManyWithoutStoryInput>;
};

export type StoryUncheckedUpdateManyInput = {
  collectionId?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StoryUncheckedUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutCollectionInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutCollectionInput>>>;
  createMany?: Maybe<StoryCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<StoryUpdateWithWhereUniqueWithoutCollectionInput>>>;
  updateMany?: Maybe<Array<Maybe<StoryUpdateManyWithWhereWithoutCollectionInput>>>;
  upsert?: Maybe<Array<Maybe<StoryUpsertWithWhereUniqueWithoutCollectionInput>>>;
};

export type StoryUncheckedUpdateManyWithoutStoriesInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StoryUncheckedUpdateWithoutCollectionInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUncheckedUpdateManyWithoutStoryInput>;
};

export type StoryUncheckedUpdateWithoutItemsInput = {
  collectionId?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUncheckedUpdateManyWithoutStoryInput>;
};

export type StoryUncheckedUpdateWithoutRequestsInput = {
  collectionId?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StoryUpdateInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutStoriesInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemUpdateManyWithoutStoriesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUpdateManyWithoutStoryInput>;
};

export type StoryUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StoryUpdateManyWithWhereWithoutCollectionInput = {
  data: StoryUncheckedUpdateManyWithoutStoriesInput;
  where: StoryScalarWhereInput;
};

export type StoryUpdateManyWithWhereWithoutItemsInput = {
  data: StoryUncheckedUpdateManyWithoutStoriesInput;
  where: StoryScalarWhereInput;
};

export type StoryUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutCollectionInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutCollectionInput>>>;
  createMany?: Maybe<StoryCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<StoryUpdateWithWhereUniqueWithoutCollectionInput>>>;
  updateMany?: Maybe<Array<Maybe<StoryUpdateManyWithWhereWithoutCollectionInput>>>;
  upsert?: Maybe<Array<Maybe<StoryUpsertWithWhereUniqueWithoutCollectionInput>>>;
};

export type StoryUpdateManyWithoutItemsInput = {
  connect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StoryCreateOrConnectWithoutItemsInput>>>;
  create?: Maybe<Array<Maybe<StoryCreateWithoutItemsInput>>>;
  delete?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<StoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<StoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<StoryUpdateWithWhereUniqueWithoutItemsInput>>>;
  updateMany?: Maybe<Array<Maybe<StoryUpdateManyWithWhereWithoutItemsInput>>>;
  upsert?: Maybe<Array<Maybe<StoryUpsertWithWhereUniqueWithoutItemsInput>>>;
};

export type StoryUpdateOneRequiredWithoutRequestsInput = {
  connect?: Maybe<StoryWhereUniqueInput>;
  connectOrCreate?: Maybe<StoryCreateOrConnectWithoutRequestsInput>;
  create?: Maybe<StoryUncheckedCreateWithoutRequestsInput>;
  update?: Maybe<StoryUncheckedUpdateWithoutRequestsInput>;
  upsert?: Maybe<StoryUpsertWithoutRequestsInput>;
};

export type StoryUpdateWithWhereUniqueWithoutCollectionInput = {
  data: StoryUncheckedUpdateWithoutCollectionInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateWithWhereUniqueWithoutItemsInput = {
  data: StoryUncheckedUpdateWithoutItemsInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateWithoutCollectionInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemUpdateManyWithoutStoriesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUpdateManyWithoutStoryInput>;
};

export type StoryUpdateWithoutItemsInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutStoriesInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  requests?: Maybe<RequestUpdateManyWithoutStoryInput>;
};

export type StoryUpdateWithoutRequestsInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutStoriesInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  itemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<ItemUpdateManyWithoutStoriesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StoryUpdateitemIdsInput = {
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StoryUpsertWithWhereUniqueWithoutCollectionInput = {
  create: StoryUncheckedCreateWithoutCollectionInput;
  update: StoryUncheckedUpdateWithoutCollectionInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpsertWithWhereUniqueWithoutItemsInput = {
  create: StoryUncheckedCreateWithoutItemsInput;
  update: StoryUncheckedUpdateWithoutItemsInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpsertWithoutRequestsInput = {
  create: StoryUncheckedCreateWithoutRequestsInput;
  update: StoryUncheckedUpdateWithoutRequestsInput;
};

export type StoryWhereInput = {
  AND?: Maybe<Array<Maybe<StoryWhereInput>>>;
  NOT?: Maybe<Array<Maybe<StoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<StoryWhereInput>>>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  itemIds?: Maybe<StringNullableListFilter>;
  items?: Maybe<ItemListRelationFilter>;
  name?: Maybe<StringFilter>;
  requests?: Maybe<RequestListRelationFilter>;
};

export type StoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['String']>>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasSome?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id: Scalars['String'];
  loginTokens: Array<LoginToken>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens: Array<RefreshToken>;
  updatedAt: Scalars['DateTime'];
};


export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type UserLoginTokensArgs = {
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  distinct?: Maybe<LoginTokenScalarFieldEnum>;
  orderBy?: Maybe<LoginTokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LoginTokenWhereInput>;
};


export type UserRefreshTokensArgs = {
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  distinct?: Maybe<RefreshTokenScalarFieldEnum>;
  orderBy?: Maybe<RefreshTokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RefreshTokenWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  doImage: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutLoginTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLoginTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutLoginTokensInput>;
};

export type UserCreateNestedOneWithoutRefreshTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRefreshTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutRefreshTokensInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLoginTokensInput = {
  create: UserUncheckedCreateWithoutLoginTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  create: UserUncheckedCreateWithoutRefreshTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLoginTokensInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRefreshTokensInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  doImage?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DoImage = 'doImage',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  doImage?: Maybe<JsonNullableWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenUncheckedCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenUncheckedCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutLoginTokensInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  doImage?: Maybe<Scalars['Json']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  loginTokens?: Maybe<LoginTokenUncheckedCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUncheckedUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUncheckedUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutLoginTokensInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUncheckedUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutLoginTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLoginTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutLoginTokensInput>;
  update?: Maybe<UserUncheckedUpdateWithoutLoginTokensInput>;
  upsert?: Maybe<UserUpsertWithoutLoginTokensInput>;
};

export type UserUpdateOneRequiredWithoutRefreshTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRefreshTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutRefreshTokensInput>;
  update?: Maybe<UserUncheckedUpdateWithoutRefreshTokensInput>;
  upsert?: Maybe<UserUpsertWithoutRefreshTokensInput>;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLoginTokensInput = {
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRefreshTokensInput = {
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  doImage?: Maybe<Scalars['Json']>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  update: UserUncheckedUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutLoginTokensInput = {
  create: UserUncheckedCreateWithoutLoginTokensInput;
  update: UserUncheckedUpdateWithoutLoginTokensInput;
};

export type UserUpsertWithoutRefreshTokensInput = {
  create: UserUncheckedCreateWithoutRefreshTokensInput;
  update: UserUncheckedUpdateWithoutRefreshTokensInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  doImage?: Maybe<JsonNullableFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  loginTokens?: Maybe<LoginTokenListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  refreshTokens?: Maybe<RefreshTokenListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type CollectionFieldsFragment = (
  { __typename?: 'Collection' }
  & Pick<Collection, 'id' | 'name' | 'description' | 'doImage' | 'storyOrder'>
);

export type CollectionFragment = (
  { __typename?: 'Collection' }
  & CollectionFieldsFragment
);

export type FindUniqueCollectionQueryVariables = Exact<{
  where: CollectionWhereUniqueInput;
}>;


export type FindUniqueCollectionQuery = (
  { __typename?: 'Query' }
  & { findUniqueCollection?: Maybe<(
    { __typename?: 'Collection' }
    & CollectionFragment
  )> }
);

export type FindManyCollectionQueryVariables = Exact<{
  where?: Maybe<CollectionWhereInput>;
  orderBy?: Maybe<Array<CollectionOrderByInput> | CollectionOrderByInput>;
  cursor?: Maybe<CollectionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyCollectionQuery = (
  { __typename?: 'Query' }
  & { findManyCollection: Array<(
    { __typename?: 'Collection' }
    & CollectionFragment
  )> }
);

export type FindManyCollectionCountQueryVariables = Exact<{
  where?: Maybe<CollectionWhereInput>;
  orderBy?: Maybe<Array<CollectionOrderByInput> | CollectionOrderByInput>;
  cursor?: Maybe<CollectionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyCollectionCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCollectionCount'>
);

export type CreateOneCollectionMutationVariables = Exact<{
  data: CollectionCreateInput;
}>;


export type CreateOneCollectionMutation = (
  { __typename?: 'Mutation' }
  & { createOneCollection: (
    { __typename?: 'Collection' }
    & CollectionFragment
  ) }
);

export type UpdateOneCollectionMutationVariables = Exact<{
  where: CollectionWhereUniqueInput;
  data: CollectionUpdateInput;
}>;


export type UpdateOneCollectionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCollection: (
    { __typename?: 'Collection' }
    & CollectionFragment
  ) }
);

export type DeleteOneCollectionMutationVariables = Exact<{
  where: CollectionWhereUniqueInput;
}>;


export type DeleteOneCollectionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCollection?: Maybe<(
    { __typename?: 'Collection' }
    & CollectionFragment
  )> }
);

export type DeleteManyCollectionMutationVariables = Exact<{
  where?: Maybe<CollectionWhereInput>;
}>;


export type DeleteManyCollectionMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCollection: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCollectionMutationVariables = Exact<{
  where?: Maybe<CollectionWhereInput>;
  data: CollectionUpdateManyMutationInput;
}>;


export type UpdateManyCollectionMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCollection: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CommentFieldsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'userId' | 'requestId' | 'messageType' | 'message' | 'createdAt'>
);

export type CommentFragment = (
  { __typename?: 'Comment' }
  & { user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ), request: (
    { __typename?: 'Request' }
    & RequestFieldsFragment
  ) }
  & CommentFieldsFragment
);

export type FindUniqueCommentQueryVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type FindUniqueCommentQuery = (
  { __typename?: 'Query' }
  & { findUniqueComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
);

export type FindManyCommentQueryVariables = Exact<{
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput> | CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyCommentQuery = (
  { __typename?: 'Query' }
  & { findManyComment: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
);

export type FindManyCommentCountQueryVariables = Exact<{
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput> | CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyCommentCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCommentCount'>
);

export type CreateOneCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { createOneComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type UpdateOneCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
}>;


export type UpdateOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateOneComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type DeleteOneCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type DeleteOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
);

export type DeleteManyCommentMutationVariables = Exact<{
  where?: Maybe<CommentWhereInput>;
}>;


export type DeleteManyCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyComment: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCommentMutationVariables = Exact<{
  where?: Maybe<CommentWhereInput>;
  data: CommentUpdateManyMutationInput;
}>;


export type UpdateManyCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateManyComment: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type ItemFieldsFragment = (
  { __typename?: 'Item' }
  & Pick<Item, 'id' | 'name' | 'description' | 'doImage'>
);

export type ItemFragment = (
  { __typename?: 'Item' }
  & ItemFieldsFragment
);

export type FindUniqueItemQueryVariables = Exact<{
  where: ItemWhereUniqueInput;
}>;


export type FindUniqueItemQuery = (
  { __typename?: 'Query' }
  & { findUniqueItem?: Maybe<(
    { __typename?: 'Item' }
    & ItemFragment
  )> }
);

export type FindManyItemQueryVariables = Exact<{
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<Array<ItemOrderByInput> | ItemOrderByInput>;
  cursor?: Maybe<ItemWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyItemQuery = (
  { __typename?: 'Query' }
  & { findManyItem: Array<(
    { __typename?: 'Item' }
    & ItemFragment
  )> }
);

export type FindManyItemCountQueryVariables = Exact<{
  where?: Maybe<ItemWhereInput>;
  orderBy?: Maybe<Array<ItemOrderByInput> | ItemOrderByInput>;
  cursor?: Maybe<ItemWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyItemCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyItemCount'>
);

export type CreateOneItemMutationVariables = Exact<{
  data: ItemCreateInput;
}>;


export type CreateOneItemMutation = (
  { __typename?: 'Mutation' }
  & { createOneItem: (
    { __typename?: 'Item' }
    & ItemFragment
  ) }
);

export type UpdateOneItemMutationVariables = Exact<{
  where: ItemWhereUniqueInput;
  data: ItemUpdateInput;
}>;


export type UpdateOneItemMutation = (
  { __typename?: 'Mutation' }
  & { updateOneItem: (
    { __typename?: 'Item' }
    & ItemFragment
  ) }
);

export type DeleteOneItemMutationVariables = Exact<{
  where: ItemWhereUniqueInput;
}>;


export type DeleteOneItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneItem?: Maybe<(
    { __typename?: 'Item' }
    & ItemFragment
  )> }
);

export type DeleteManyItemMutationVariables = Exact<{
  where?: Maybe<ItemWhereInput>;
}>;


export type DeleteManyItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyItem: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyItemMutationVariables = Exact<{
  where?: Maybe<ItemWhereInput>;
  data: ItemUpdateManyMutationInput;
}>;


export type UpdateManyItemMutation = (
  { __typename?: 'Mutation' }
  & { updateManyItem: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type LoginTokenFieldsFragment = (
  { __typename?: 'LoginToken' }
  & Pick<LoginToken, 'id' | 'userId' | 'approved' | 'expires' | 'createdAt' | 'email' | 'secret' | 'ip' | 'userAgent' | 'userAgentRaw' | 'geo' | 'domain'>
);

export type LoginTokenFragment = (
  { __typename?: 'LoginToken' }
  & { user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
  & LoginTokenFieldsFragment
);

export type FindUniqueLoginTokenQueryVariables = Exact<{
  where: LoginTokenWhereUniqueInput;
}>;


export type FindUniqueLoginTokenQuery = (
  { __typename?: 'Query' }
  & { findUniqueLoginToken?: Maybe<(
    { __typename?: 'LoginToken' }
    & LoginTokenFragment
  )> }
);

export type FindManyLoginTokenQueryVariables = Exact<{
  where?: Maybe<LoginTokenWhereInput>;
  orderBy?: Maybe<Array<LoginTokenOrderByInput> | LoginTokenOrderByInput>;
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyLoginTokenQuery = (
  { __typename?: 'Query' }
  & { findManyLoginToken: Array<(
    { __typename?: 'LoginToken' }
    & LoginTokenFragment
  )> }
);

export type FindManyLoginTokenCountQueryVariables = Exact<{
  where?: Maybe<LoginTokenWhereInput>;
  orderBy?: Maybe<Array<LoginTokenOrderByInput> | LoginTokenOrderByInput>;
  cursor?: Maybe<LoginTokenWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyLoginTokenCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyLoginTokenCount'>
);

export type CreateOneLoginTokenMutationVariables = Exact<{
  data: LoginTokenCreateInput;
}>;


export type CreateOneLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { createOneLoginToken: (
    { __typename?: 'LoginToken' }
    & LoginTokenFragment
  ) }
);

export type UpdateOneLoginTokenMutationVariables = Exact<{
  where: LoginTokenWhereUniqueInput;
  data: LoginTokenUpdateInput;
}>;


export type UpdateOneLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { updateOneLoginToken: (
    { __typename?: 'LoginToken' }
    & LoginTokenFragment
  ) }
);

export type DeleteOneLoginTokenMutationVariables = Exact<{
  where: LoginTokenWhereUniqueInput;
}>;


export type DeleteOneLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneLoginToken?: Maybe<(
    { __typename?: 'LoginToken' }
    & LoginTokenFragment
  )> }
);

export type DeleteManyLoginTokenMutationVariables = Exact<{
  where?: Maybe<LoginTokenWhereInput>;
}>;


export type DeleteManyLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyLoginToken: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyLoginTokenMutationVariables = Exact<{
  where?: Maybe<LoginTokenWhereInput>;
  data: LoginTokenUpdateManyMutationInput;
}>;


export type UpdateManyLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { updateManyLoginToken: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type RefreshTokenFieldsFragment = (
  { __typename?: 'RefreshToken' }
  & Pick<RefreshToken, 'loginTokenId' | 'userId' | 'createdAt' | 'expires' | 'value' | 'lastActive' | 'ip' | 'userAgent' | 'userAgentRaw' | 'geo'>
);

export type RefreshTokenFragment = (
  { __typename?: 'RefreshToken' }
  & { user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
  & RefreshTokenFieldsFragment
);

export type FindUniqueRefreshTokenQueryVariables = Exact<{
  where: RefreshTokenWhereUniqueInput;
}>;


export type FindUniqueRefreshTokenQuery = (
  { __typename?: 'Query' }
  & { findUniqueRefreshToken?: Maybe<(
    { __typename?: 'RefreshToken' }
    & RefreshTokenFragment
  )> }
);

export type FindManyRefreshTokenQueryVariables = Exact<{
  where?: Maybe<RefreshTokenWhereInput>;
  orderBy?: Maybe<Array<RefreshTokenOrderByInput> | RefreshTokenOrderByInput>;
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRefreshTokenQuery = (
  { __typename?: 'Query' }
  & { findManyRefreshToken: Array<(
    { __typename?: 'RefreshToken' }
    & RefreshTokenFragment
  )> }
);

export type FindManyRefreshTokenCountQueryVariables = Exact<{
  where?: Maybe<RefreshTokenWhereInput>;
  orderBy?: Maybe<Array<RefreshTokenOrderByInput> | RefreshTokenOrderByInput>;
  cursor?: Maybe<RefreshTokenWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRefreshTokenCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyRefreshTokenCount'>
);

export type CreateOneRefreshTokenMutationVariables = Exact<{
  data: RefreshTokenCreateInput;
}>;


export type CreateOneRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { createOneRefreshToken: (
    { __typename?: 'RefreshToken' }
    & RefreshTokenFragment
  ) }
);

export type UpdateOneRefreshTokenMutationVariables = Exact<{
  where: RefreshTokenWhereUniqueInput;
  data: RefreshTokenUpdateInput;
}>;


export type UpdateOneRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { updateOneRefreshToken: (
    { __typename?: 'RefreshToken' }
    & RefreshTokenFragment
  ) }
);

export type DeleteOneRefreshTokenMutationVariables = Exact<{
  where: RefreshTokenWhereUniqueInput;
}>;


export type DeleteOneRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneRefreshToken?: Maybe<(
    { __typename?: 'RefreshToken' }
    & RefreshTokenFragment
  )> }
);

export type DeleteManyRefreshTokenMutationVariables = Exact<{
  where?: Maybe<RefreshTokenWhereInput>;
}>;


export type DeleteManyRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyRefreshToken: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyRefreshTokenMutationVariables = Exact<{
  where?: Maybe<RefreshTokenWhereInput>;
  data: RefreshTokenUpdateManyMutationInput;
}>;


export type UpdateManyRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { updateManyRefreshToken: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type RequestFieldsFragment = (
  { __typename?: 'Request' }
  & Pick<Request, 'id' | 'name' | 'storyId' | 'startDate' | 'endDate'>
);

export type RequestFragment = (
  { __typename?: 'Request' }
  & { story: (
    { __typename?: 'Story' }
    & StoryFieldsFragment
  ) }
  & RequestFieldsFragment
);

export type FindUniqueRequestQueryVariables = Exact<{
  where: RequestWhereUniqueInput;
}>;


export type FindUniqueRequestQuery = (
  { __typename?: 'Query' }
  & { findUniqueRequest?: Maybe<(
    { __typename?: 'Request' }
    & RequestFragment
  )> }
);

export type FindManyRequestQueryVariables = Exact<{
  where?: Maybe<RequestWhereInput>;
  orderBy?: Maybe<Array<RequestOrderByInput> | RequestOrderByInput>;
  cursor?: Maybe<RequestWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRequestQuery = (
  { __typename?: 'Query' }
  & { findManyRequest: Array<(
    { __typename?: 'Request' }
    & RequestFragment
  )> }
);

export type FindManyRequestCountQueryVariables = Exact<{
  where?: Maybe<RequestWhereInput>;
  orderBy?: Maybe<Array<RequestOrderByInput> | RequestOrderByInput>;
  cursor?: Maybe<RequestWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRequestCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyRequestCount'>
);

export type CreateOneRequestMutationVariables = Exact<{
  data: RequestCreateInput;
}>;


export type CreateOneRequestMutation = (
  { __typename?: 'Mutation' }
  & { createOneRequest: (
    { __typename?: 'Request' }
    & RequestFragment
  ) }
);

export type UpdateOneRequestMutationVariables = Exact<{
  where: RequestWhereUniqueInput;
  data: RequestUpdateInput;
}>;


export type UpdateOneRequestMutation = (
  { __typename?: 'Mutation' }
  & { updateOneRequest: (
    { __typename?: 'Request' }
    & RequestFragment
  ) }
);

export type DeleteOneRequestMutationVariables = Exact<{
  where: RequestWhereUniqueInput;
}>;


export type DeleteOneRequestMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneRequest?: Maybe<(
    { __typename?: 'Request' }
    & RequestFragment
  )> }
);

export type DeleteManyRequestMutationVariables = Exact<{
  where?: Maybe<RequestWhereInput>;
}>;


export type DeleteManyRequestMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyRequest: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyRequestMutationVariables = Exact<{
  where?: Maybe<RequestWhereInput>;
  data: RequestUpdateManyMutationInput;
}>;


export type UpdateManyRequestMutation = (
  { __typename?: 'Mutation' }
  & { updateManyRequest: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type StoryFieldsFragment = (
  { __typename?: 'Story' }
  & Pick<Story, 'id' | 'name' | 'description' | 'doImage' | 'collectionId' | 'itemIds'>
);

export type StoryFragment = (
  { __typename?: 'Story' }
  & { collection: (
    { __typename?: 'Collection' }
    & CollectionFieldsFragment
  ) }
  & StoryFieldsFragment
);

export type FindUniqueStoryQueryVariables = Exact<{
  where: StoryWhereUniqueInput;
}>;


export type FindUniqueStoryQuery = (
  { __typename?: 'Query' }
  & { findUniqueStory?: Maybe<(
    { __typename?: 'Story' }
    & StoryFragment
  )> }
);

export type FindManyStoryQueryVariables = Exact<{
  where?: Maybe<StoryWhereInput>;
  orderBy?: Maybe<Array<StoryOrderByInput> | StoryOrderByInput>;
  cursor?: Maybe<StoryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyStoryQuery = (
  { __typename?: 'Query' }
  & { findManyStory: Array<(
    { __typename?: 'Story' }
    & StoryFragment
  )> }
);

export type FindManyStoryCountQueryVariables = Exact<{
  where?: Maybe<StoryWhereInput>;
  orderBy?: Maybe<Array<StoryOrderByInput> | StoryOrderByInput>;
  cursor?: Maybe<StoryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyStoryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyStoryCount'>
);

export type CreateOneStoryMutationVariables = Exact<{
  data: StoryCreateInput;
}>;


export type CreateOneStoryMutation = (
  { __typename?: 'Mutation' }
  & { createOneStory: (
    { __typename?: 'Story' }
    & StoryFragment
  ) }
);

export type UpdateOneStoryMutationVariables = Exact<{
  where: StoryWhereUniqueInput;
  data: StoryUpdateInput;
}>;


export type UpdateOneStoryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneStory: (
    { __typename?: 'Story' }
    & StoryFragment
  ) }
);

export type DeleteOneStoryMutationVariables = Exact<{
  where: StoryWhereUniqueInput;
}>;


export type DeleteOneStoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneStory?: Maybe<(
    { __typename?: 'Story' }
    & StoryFragment
  )> }
);

export type DeleteManyStoryMutationVariables = Exact<{
  where?: Maybe<StoryWhereInput>;
}>;


export type DeleteManyStoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyStory: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyStoryMutationVariables = Exact<{
  where?: Maybe<StoryWhereInput>;
  data: StoryUpdateManyMutationInput;
}>;


export type UpdateManyStoryMutation = (
  { __typename?: 'Mutation' }
  & { updateManyStory: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'name' | 'doImage' | 'password' | 'createdAt' | 'updatedAt'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & UserFieldsFragment
);

export type FindUniqueUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FindUniqueUserQuery = (
  { __typename?: 'Query' }
  & { findUniqueUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type FindManyUserQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserQuery = (
  { __typename?: 'Query' }
  & { findManyUser: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type FindManyUserCountQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyUserCount'>
);

export type CreateOneUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type UpdateOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type DeleteOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteOneUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type DeleteManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
}>;


export type DeleteManyUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyUser: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  data: UserUpdateManyMutationInput;
}>;


export type UpdateManyUserMutation = (
  { __typename?: 'Mutation' }
  & { updateManyUser: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export const CollectionFieldsFragmentDoc = gql`
    fragment CollectionFields on Collection {
  id
  name
  description
  doImage
  storyOrder
}
    `;
export const CollectionFragmentDoc = gql`
    fragment Collection on Collection {
  ...CollectionFields
}
    ${CollectionFieldsFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  id
  userId
  requestId
  messageType
  message
  createdAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  email
  name
  doImage
  password
  createdAt
  updatedAt
}
    `;
export const RequestFieldsFragmentDoc = gql`
    fragment RequestFields on Request {
  id
  name
  storyId
  startDate
  endDate
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  ...CommentFields
  user {
    ...UserFields
  }
  request {
    ...RequestFields
  }
}
    ${CommentFieldsFragmentDoc}
${UserFieldsFragmentDoc}
${RequestFieldsFragmentDoc}`;
export const ItemFieldsFragmentDoc = gql`
    fragment ItemFields on Item {
  id
  name
  description
  doImage
}
    `;
export const ItemFragmentDoc = gql`
    fragment Item on Item {
  ...ItemFields
}
    ${ItemFieldsFragmentDoc}`;
export const LoginTokenFieldsFragmentDoc = gql`
    fragment LoginTokenFields on LoginToken {
  id
  userId
  approved
  expires
  createdAt
  email
  secret
  ip
  userAgent
  userAgentRaw
  geo
  domain
}
    `;
export const LoginTokenFragmentDoc = gql`
    fragment LoginToken on LoginToken {
  ...LoginTokenFields
  user {
    ...UserFields
  }
}
    ${LoginTokenFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const RefreshTokenFieldsFragmentDoc = gql`
    fragment RefreshTokenFields on RefreshToken {
  loginTokenId
  userId
  createdAt
  expires
  value
  lastActive
  ip
  userAgent
  userAgentRaw
  geo
}
    `;
export const RefreshTokenFragmentDoc = gql`
    fragment RefreshToken on RefreshToken {
  ...RefreshTokenFields
  user {
    ...UserFields
  }
}
    ${RefreshTokenFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const StoryFieldsFragmentDoc = gql`
    fragment StoryFields on Story {
  id
  name
  description
  doImage
  collectionId
  itemIds
}
    `;
export const RequestFragmentDoc = gql`
    fragment Request on Request {
  ...RequestFields
  story {
    ...StoryFields
  }
}
    ${RequestFieldsFragmentDoc}
${StoryFieldsFragmentDoc}`;
export const StoryFragmentDoc = gql`
    fragment Story on Story {
  ...StoryFields
  collection {
    ...CollectionFields
  }
}
    ${StoryFieldsFragmentDoc}
${CollectionFieldsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
}
    ${UserFieldsFragmentDoc}`;
export const FindUniqueCollectionDocument = gql`
    query findUniqueCollection($where: CollectionWhereUniqueInput!) {
  findUniqueCollection(where: $where) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useFindUniqueCollectionQuery__
 *
 * To run a query within a React component, call `useFindUniqueCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueCollectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueCollectionQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueCollectionQuery, FindUniqueCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueCollectionQuery, FindUniqueCollectionQueryVariables>(FindUniqueCollectionDocument, options);
      }
export function useFindUniqueCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueCollectionQuery, FindUniqueCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueCollectionQuery, FindUniqueCollectionQueryVariables>(FindUniqueCollectionDocument, options);
        }
export type FindUniqueCollectionQueryHookResult = ReturnType<typeof useFindUniqueCollectionQuery>;
export type FindUniqueCollectionLazyQueryHookResult = ReturnType<typeof useFindUniqueCollectionLazyQuery>;
export type FindUniqueCollectionQueryResult = Apollo.QueryResult<FindUniqueCollectionQuery, FindUniqueCollectionQueryVariables>;
export const FindManyCollectionDocument = gql`
    query findManyCollection($where: CollectionWhereInput, $orderBy: [CollectionOrderByInput!], $cursor: CollectionWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCollection(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useFindManyCollectionQuery__
 *
 * To run a query within a React component, call `useFindManyCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCollectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCollectionQuery(baseOptions?: Apollo.QueryHookOptions<FindManyCollectionQuery, FindManyCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyCollectionQuery, FindManyCollectionQueryVariables>(FindManyCollectionDocument, options);
      }
export function useFindManyCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyCollectionQuery, FindManyCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyCollectionQuery, FindManyCollectionQueryVariables>(FindManyCollectionDocument, options);
        }
export type FindManyCollectionQueryHookResult = ReturnType<typeof useFindManyCollectionQuery>;
export type FindManyCollectionLazyQueryHookResult = ReturnType<typeof useFindManyCollectionLazyQuery>;
export type FindManyCollectionQueryResult = Apollo.QueryResult<FindManyCollectionQuery, FindManyCollectionQueryVariables>;
export const FindManyCollectionCountDocument = gql`
    query findManyCollectionCount($where: CollectionWhereInput, $orderBy: [CollectionOrderByInput!], $cursor: CollectionWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCollectionCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyCollectionCountQuery__
 *
 * To run a query within a React component, call `useFindManyCollectionCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCollectionCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCollectionCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCollectionCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyCollectionCountQuery, FindManyCollectionCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyCollectionCountQuery, FindManyCollectionCountQueryVariables>(FindManyCollectionCountDocument, options);
      }
export function useFindManyCollectionCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyCollectionCountQuery, FindManyCollectionCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyCollectionCountQuery, FindManyCollectionCountQueryVariables>(FindManyCollectionCountDocument, options);
        }
export type FindManyCollectionCountQueryHookResult = ReturnType<typeof useFindManyCollectionCountQuery>;
export type FindManyCollectionCountLazyQueryHookResult = ReturnType<typeof useFindManyCollectionCountLazyQuery>;
export type FindManyCollectionCountQueryResult = Apollo.QueryResult<FindManyCollectionCountQuery, FindManyCollectionCountQueryVariables>;
export const CreateOneCollectionDocument = gql`
    mutation createOneCollection($data: CollectionCreateInput!) {
  createOneCollection(data: $data) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useCreateOneCollectionMutation__
 *
 * To run a mutation, you first call `useCreateOneCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCollectionMutation, { data, loading, error }] = useCreateOneCollectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCollectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCollectionMutation, CreateOneCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCollectionMutation, CreateOneCollectionMutationVariables>(CreateOneCollectionDocument, options);
      }
export type CreateOneCollectionMutationHookResult = ReturnType<typeof useCreateOneCollectionMutation>;
export type CreateOneCollectionMutationResult = Apollo.MutationResult<CreateOneCollectionMutation>;
export type CreateOneCollectionMutationOptions = Apollo.BaseMutationOptions<CreateOneCollectionMutation, CreateOneCollectionMutationVariables>;
export const UpdateOneCollectionDocument = gql`
    mutation updateOneCollection($where: CollectionWhereUniqueInput!, $data: CollectionUpdateInput!) {
  updateOneCollection(where: $where, data: $data) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useUpdateOneCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateOneCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCollectionMutation, { data, loading, error }] = useUpdateOneCollectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCollectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCollectionMutation, UpdateOneCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCollectionMutation, UpdateOneCollectionMutationVariables>(UpdateOneCollectionDocument, options);
      }
export type UpdateOneCollectionMutationHookResult = ReturnType<typeof useUpdateOneCollectionMutation>;
export type UpdateOneCollectionMutationResult = Apollo.MutationResult<UpdateOneCollectionMutation>;
export type UpdateOneCollectionMutationOptions = Apollo.BaseMutationOptions<UpdateOneCollectionMutation, UpdateOneCollectionMutationVariables>;
export const DeleteOneCollectionDocument = gql`
    mutation deleteOneCollection($where: CollectionWhereUniqueInput!) {
  deleteOneCollection(where: $where) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useDeleteOneCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteOneCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCollectionMutation, { data, loading, error }] = useDeleteOneCollectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCollectionMutation, DeleteOneCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneCollectionMutation, DeleteOneCollectionMutationVariables>(DeleteOneCollectionDocument, options);
      }
export type DeleteOneCollectionMutationHookResult = ReturnType<typeof useDeleteOneCollectionMutation>;
export type DeleteOneCollectionMutationResult = Apollo.MutationResult<DeleteOneCollectionMutation>;
export type DeleteOneCollectionMutationOptions = Apollo.BaseMutationOptions<DeleteOneCollectionMutation, DeleteOneCollectionMutationVariables>;
export const DeleteManyCollectionDocument = gql`
    mutation deleteManyCollection($where: CollectionWhereInput) {
  deleteManyCollection(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteManyCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCollectionMutation, { data, loading, error }] = useDeleteManyCollectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCollectionMutation, DeleteManyCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCollectionMutation, DeleteManyCollectionMutationVariables>(DeleteManyCollectionDocument, options);
      }
export type DeleteManyCollectionMutationHookResult = ReturnType<typeof useDeleteManyCollectionMutation>;
export type DeleteManyCollectionMutationResult = Apollo.MutationResult<DeleteManyCollectionMutation>;
export type DeleteManyCollectionMutationOptions = Apollo.BaseMutationOptions<DeleteManyCollectionMutation, DeleteManyCollectionMutationVariables>;
export const UpdateManyCollectionDocument = gql`
    mutation updateManyCollection($where: CollectionWhereInput, $data: CollectionUpdateManyMutationInput!) {
  updateManyCollection(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateManyCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCollectionMutation, { data, loading, error }] = useUpdateManyCollectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCollectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyCollectionMutation, UpdateManyCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyCollectionMutation, UpdateManyCollectionMutationVariables>(UpdateManyCollectionDocument, options);
      }
export type UpdateManyCollectionMutationHookResult = ReturnType<typeof useUpdateManyCollectionMutation>;
export type UpdateManyCollectionMutationResult = Apollo.MutationResult<UpdateManyCollectionMutation>;
export type UpdateManyCollectionMutationOptions = Apollo.BaseMutationOptions<UpdateManyCollectionMutation, UpdateManyCollectionMutationVariables>;
export const FindUniqueCommentDocument = gql`
    query findUniqueComment($where: CommentWhereUniqueInput!) {
  findUniqueComment(where: $where) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useFindUniqueCommentQuery__
 *
 * To run a query within a React component, call `useFindUniqueCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueCommentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueCommentQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueCommentQuery, FindUniqueCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueCommentQuery, FindUniqueCommentQueryVariables>(FindUniqueCommentDocument, options);
      }
export function useFindUniqueCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueCommentQuery, FindUniqueCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueCommentQuery, FindUniqueCommentQueryVariables>(FindUniqueCommentDocument, options);
        }
export type FindUniqueCommentQueryHookResult = ReturnType<typeof useFindUniqueCommentQuery>;
export type FindUniqueCommentLazyQueryHookResult = ReturnType<typeof useFindUniqueCommentLazyQuery>;
export type FindUniqueCommentQueryResult = Apollo.QueryResult<FindUniqueCommentQuery, FindUniqueCommentQueryVariables>;
export const FindManyCommentDocument = gql`
    query findManyComment($where: CommentWhereInput, $orderBy: [CommentOrderByInput!], $cursor: CommentWhereUniqueInput, $skip: Int, $take: Int) {
  findManyComment(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useFindManyCommentQuery__
 *
 * To run a query within a React component, call `useFindManyCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCommentQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCommentQuery(baseOptions?: Apollo.QueryHookOptions<FindManyCommentQuery, FindManyCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyCommentQuery, FindManyCommentQueryVariables>(FindManyCommentDocument, options);
      }
export function useFindManyCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyCommentQuery, FindManyCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyCommentQuery, FindManyCommentQueryVariables>(FindManyCommentDocument, options);
        }
export type FindManyCommentQueryHookResult = ReturnType<typeof useFindManyCommentQuery>;
export type FindManyCommentLazyQueryHookResult = ReturnType<typeof useFindManyCommentLazyQuery>;
export type FindManyCommentQueryResult = Apollo.QueryResult<FindManyCommentQuery, FindManyCommentQueryVariables>;
export const FindManyCommentCountDocument = gql`
    query findManyCommentCount($where: CommentWhereInput, $orderBy: [CommentOrderByInput!], $cursor: CommentWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCommentCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyCommentCountQuery__
 *
 * To run a query within a React component, call `useFindManyCommentCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCommentCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCommentCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCommentCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>(FindManyCommentCountDocument, options);
      }
export function useFindManyCommentCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>(FindManyCommentCountDocument, options);
        }
export type FindManyCommentCountQueryHookResult = ReturnType<typeof useFindManyCommentCountQuery>;
export type FindManyCommentCountLazyQueryHookResult = ReturnType<typeof useFindManyCommentCountLazyQuery>;
export type FindManyCommentCountQueryResult = Apollo.QueryResult<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>;
export const CreateOneCommentDocument = gql`
    mutation createOneComment($data: CommentCreateInput!) {
  createOneComment(data: $data) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useCreateOneCommentMutation__
 *
 * To run a mutation, you first call `useCreateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCommentMutation, { data, loading, error }] = useCreateOneCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCommentMutation, CreateOneCommentMutationVariables>(CreateOneCommentDocument, options);
      }
export type CreateOneCommentMutationHookResult = ReturnType<typeof useCreateOneCommentMutation>;
export type CreateOneCommentMutationResult = Apollo.MutationResult<CreateOneCommentMutation>;
export type CreateOneCommentMutationOptions = Apollo.BaseMutationOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>;
export const UpdateOneCommentDocument = gql`
    mutation updateOneComment($where: CommentWhereUniqueInput!, $data: CommentUpdateInput!) {
  updateOneComment(where: $where, data: $data) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useUpdateOneCommentMutation__
 *
 * To run a mutation, you first call `useUpdateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCommentMutation, { data, loading, error }] = useUpdateOneCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>(UpdateOneCommentDocument, options);
      }
export type UpdateOneCommentMutationHookResult = ReturnType<typeof useUpdateOneCommentMutation>;
export type UpdateOneCommentMutationResult = Apollo.MutationResult<UpdateOneCommentMutation>;
export type UpdateOneCommentMutationOptions = Apollo.BaseMutationOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>;
export const DeleteOneCommentDocument = gql`
    mutation deleteOneComment($where: CommentWhereUniqueInput!) {
  deleteOneComment(where: $where) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useDeleteOneCommentMutation__
 *
 * To run a mutation, you first call `useDeleteOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCommentMutation, { data, loading, error }] = useDeleteOneCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>(DeleteOneCommentDocument, options);
      }
export type DeleteOneCommentMutationHookResult = ReturnType<typeof useDeleteOneCommentMutation>;
export type DeleteOneCommentMutationResult = Apollo.MutationResult<DeleteOneCommentMutation>;
export type DeleteOneCommentMutationOptions = Apollo.BaseMutationOptions<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>;
export const DeleteManyCommentDocument = gql`
    mutation deleteManyComment($where: CommentWhereInput) {
  deleteManyComment(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCommentMutation__
 *
 * To run a mutation, you first call `useDeleteManyCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCommentMutation, { data, loading, error }] = useDeleteManyCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>(DeleteManyCommentDocument, options);
      }
export type DeleteManyCommentMutationHookResult = ReturnType<typeof useDeleteManyCommentMutation>;
export type DeleteManyCommentMutationResult = Apollo.MutationResult<DeleteManyCommentMutation>;
export type DeleteManyCommentMutationOptions = Apollo.BaseMutationOptions<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>;
export const UpdateManyCommentDocument = gql`
    mutation updateManyComment($where: CommentWhereInput, $data: CommentUpdateManyMutationInput!) {
  updateManyComment(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCommentMutation__
 *
 * To run a mutation, you first call `useUpdateManyCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCommentMutation, { data, loading, error }] = useUpdateManyCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>(UpdateManyCommentDocument, options);
      }
export type UpdateManyCommentMutationHookResult = ReturnType<typeof useUpdateManyCommentMutation>;
export type UpdateManyCommentMutationResult = Apollo.MutationResult<UpdateManyCommentMutation>;
export type UpdateManyCommentMutationOptions = Apollo.BaseMutationOptions<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>;
export const FindUniqueItemDocument = gql`
    query findUniqueItem($where: ItemWhereUniqueInput!) {
  findUniqueItem(where: $where) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useFindUniqueItemQuery__
 *
 * To run a query within a React component, call `useFindUniqueItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueItemQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueItemQuery, FindUniqueItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueItemQuery, FindUniqueItemQueryVariables>(FindUniqueItemDocument, options);
      }
export function useFindUniqueItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueItemQuery, FindUniqueItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueItemQuery, FindUniqueItemQueryVariables>(FindUniqueItemDocument, options);
        }
export type FindUniqueItemQueryHookResult = ReturnType<typeof useFindUniqueItemQuery>;
export type FindUniqueItemLazyQueryHookResult = ReturnType<typeof useFindUniqueItemLazyQuery>;
export type FindUniqueItemQueryResult = Apollo.QueryResult<FindUniqueItemQuery, FindUniqueItemQueryVariables>;
export const FindManyItemDocument = gql`
    query findManyItem($where: ItemWhereInput, $orderBy: [ItemOrderByInput!], $cursor: ItemWhereUniqueInput, $skip: Int, $take: Int) {
  findManyItem(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useFindManyItemQuery__
 *
 * To run a query within a React component, call `useFindManyItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyItemQuery(baseOptions?: Apollo.QueryHookOptions<FindManyItemQuery, FindManyItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyItemQuery, FindManyItemQueryVariables>(FindManyItemDocument, options);
      }
export function useFindManyItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyItemQuery, FindManyItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyItemQuery, FindManyItemQueryVariables>(FindManyItemDocument, options);
        }
export type FindManyItemQueryHookResult = ReturnType<typeof useFindManyItemQuery>;
export type FindManyItemLazyQueryHookResult = ReturnType<typeof useFindManyItemLazyQuery>;
export type FindManyItemQueryResult = Apollo.QueryResult<FindManyItemQuery, FindManyItemQueryVariables>;
export const FindManyItemCountDocument = gql`
    query findManyItemCount($where: ItemWhereInput, $orderBy: [ItemOrderByInput!], $cursor: ItemWhereUniqueInput, $skip: Int, $take: Int) {
  findManyItemCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyItemCountQuery__
 *
 * To run a query within a React component, call `useFindManyItemCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyItemCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyItemCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyItemCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyItemCountQuery, FindManyItemCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyItemCountQuery, FindManyItemCountQueryVariables>(FindManyItemCountDocument, options);
      }
export function useFindManyItemCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyItemCountQuery, FindManyItemCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyItemCountQuery, FindManyItemCountQueryVariables>(FindManyItemCountDocument, options);
        }
export type FindManyItemCountQueryHookResult = ReturnType<typeof useFindManyItemCountQuery>;
export type FindManyItemCountLazyQueryHookResult = ReturnType<typeof useFindManyItemCountLazyQuery>;
export type FindManyItemCountQueryResult = Apollo.QueryResult<FindManyItemCountQuery, FindManyItemCountQueryVariables>;
export const CreateOneItemDocument = gql`
    mutation createOneItem($data: ItemCreateInput!) {
  createOneItem(data: $data) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useCreateOneItemMutation__
 *
 * To run a mutation, you first call `useCreateOneItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneItemMutation, { data, loading, error }] = useCreateOneItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneItemMutation, CreateOneItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneItemMutation, CreateOneItemMutationVariables>(CreateOneItemDocument, options);
      }
export type CreateOneItemMutationHookResult = ReturnType<typeof useCreateOneItemMutation>;
export type CreateOneItemMutationResult = Apollo.MutationResult<CreateOneItemMutation>;
export type CreateOneItemMutationOptions = Apollo.BaseMutationOptions<CreateOneItemMutation, CreateOneItemMutationVariables>;
export const UpdateOneItemDocument = gql`
    mutation updateOneItem($where: ItemWhereUniqueInput!, $data: ItemUpdateInput!) {
  updateOneItem(where: $where, data: $data) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useUpdateOneItemMutation__
 *
 * To run a mutation, you first call `useUpdateOneItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneItemMutation, { data, loading, error }] = useUpdateOneItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneItemMutation, UpdateOneItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneItemMutation, UpdateOneItemMutationVariables>(UpdateOneItemDocument, options);
      }
export type UpdateOneItemMutationHookResult = ReturnType<typeof useUpdateOneItemMutation>;
export type UpdateOneItemMutationResult = Apollo.MutationResult<UpdateOneItemMutation>;
export type UpdateOneItemMutationOptions = Apollo.BaseMutationOptions<UpdateOneItemMutation, UpdateOneItemMutationVariables>;
export const DeleteOneItemDocument = gql`
    mutation deleteOneItem($where: ItemWhereUniqueInput!) {
  deleteOneItem(where: $where) {
    ...Item
  }
}
    ${ItemFragmentDoc}`;

/**
 * __useDeleteOneItemMutation__
 *
 * To run a mutation, you first call `useDeleteOneItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneItemMutation, { data, loading, error }] = useDeleteOneItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneItemMutation, DeleteOneItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneItemMutation, DeleteOneItemMutationVariables>(DeleteOneItemDocument, options);
      }
export type DeleteOneItemMutationHookResult = ReturnType<typeof useDeleteOneItemMutation>;
export type DeleteOneItemMutationResult = Apollo.MutationResult<DeleteOneItemMutation>;
export type DeleteOneItemMutationOptions = Apollo.BaseMutationOptions<DeleteOneItemMutation, DeleteOneItemMutationVariables>;
export const DeleteManyItemDocument = gql`
    mutation deleteManyItem($where: ItemWhereInput) {
  deleteManyItem(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyItemMutation__
 *
 * To run a mutation, you first call `useDeleteManyItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyItemMutation, { data, loading, error }] = useDeleteManyItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyItemMutation, DeleteManyItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyItemMutation, DeleteManyItemMutationVariables>(DeleteManyItemDocument, options);
      }
export type DeleteManyItemMutationHookResult = ReturnType<typeof useDeleteManyItemMutation>;
export type DeleteManyItemMutationResult = Apollo.MutationResult<DeleteManyItemMutation>;
export type DeleteManyItemMutationOptions = Apollo.BaseMutationOptions<DeleteManyItemMutation, DeleteManyItemMutationVariables>;
export const UpdateManyItemDocument = gql`
    mutation updateManyItem($where: ItemWhereInput, $data: ItemUpdateManyMutationInput!) {
  updateManyItem(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyItemMutation__
 *
 * To run a mutation, you first call `useUpdateManyItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyItemMutation, { data, loading, error }] = useUpdateManyItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyItemMutation, UpdateManyItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyItemMutation, UpdateManyItemMutationVariables>(UpdateManyItemDocument, options);
      }
export type UpdateManyItemMutationHookResult = ReturnType<typeof useUpdateManyItemMutation>;
export type UpdateManyItemMutationResult = Apollo.MutationResult<UpdateManyItemMutation>;
export type UpdateManyItemMutationOptions = Apollo.BaseMutationOptions<UpdateManyItemMutation, UpdateManyItemMutationVariables>;
export const FindUniqueLoginTokenDocument = gql`
    query findUniqueLoginToken($where: LoginTokenWhereUniqueInput!) {
  findUniqueLoginToken(where: $where) {
    ...LoginToken
  }
}
    ${LoginTokenFragmentDoc}`;

/**
 * __useFindUniqueLoginTokenQuery__
 *
 * To run a query within a React component, call `useFindUniqueLoginTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueLoginTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueLoginTokenQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueLoginTokenQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueLoginTokenQuery, FindUniqueLoginTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueLoginTokenQuery, FindUniqueLoginTokenQueryVariables>(FindUniqueLoginTokenDocument, options);
      }
export function useFindUniqueLoginTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueLoginTokenQuery, FindUniqueLoginTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueLoginTokenQuery, FindUniqueLoginTokenQueryVariables>(FindUniqueLoginTokenDocument, options);
        }
export type FindUniqueLoginTokenQueryHookResult = ReturnType<typeof useFindUniqueLoginTokenQuery>;
export type FindUniqueLoginTokenLazyQueryHookResult = ReturnType<typeof useFindUniqueLoginTokenLazyQuery>;
export type FindUniqueLoginTokenQueryResult = Apollo.QueryResult<FindUniqueLoginTokenQuery, FindUniqueLoginTokenQueryVariables>;
export const FindManyLoginTokenDocument = gql`
    query findManyLoginToken($where: LoginTokenWhereInput, $orderBy: [LoginTokenOrderByInput!], $cursor: LoginTokenWhereUniqueInput, $skip: Int, $take: Int) {
  findManyLoginToken(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...LoginToken
  }
}
    ${LoginTokenFragmentDoc}`;

/**
 * __useFindManyLoginTokenQuery__
 *
 * To run a query within a React component, call `useFindManyLoginTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyLoginTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyLoginTokenQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyLoginTokenQuery(baseOptions?: Apollo.QueryHookOptions<FindManyLoginTokenQuery, FindManyLoginTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyLoginTokenQuery, FindManyLoginTokenQueryVariables>(FindManyLoginTokenDocument, options);
      }
export function useFindManyLoginTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyLoginTokenQuery, FindManyLoginTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyLoginTokenQuery, FindManyLoginTokenQueryVariables>(FindManyLoginTokenDocument, options);
        }
export type FindManyLoginTokenQueryHookResult = ReturnType<typeof useFindManyLoginTokenQuery>;
export type FindManyLoginTokenLazyQueryHookResult = ReturnType<typeof useFindManyLoginTokenLazyQuery>;
export type FindManyLoginTokenQueryResult = Apollo.QueryResult<FindManyLoginTokenQuery, FindManyLoginTokenQueryVariables>;
export const FindManyLoginTokenCountDocument = gql`
    query findManyLoginTokenCount($where: LoginTokenWhereInput, $orderBy: [LoginTokenOrderByInput!], $cursor: LoginTokenWhereUniqueInput, $skip: Int, $take: Int) {
  findManyLoginTokenCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyLoginTokenCountQuery__
 *
 * To run a query within a React component, call `useFindManyLoginTokenCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyLoginTokenCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyLoginTokenCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyLoginTokenCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyLoginTokenCountQuery, FindManyLoginTokenCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyLoginTokenCountQuery, FindManyLoginTokenCountQueryVariables>(FindManyLoginTokenCountDocument, options);
      }
export function useFindManyLoginTokenCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyLoginTokenCountQuery, FindManyLoginTokenCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyLoginTokenCountQuery, FindManyLoginTokenCountQueryVariables>(FindManyLoginTokenCountDocument, options);
        }
export type FindManyLoginTokenCountQueryHookResult = ReturnType<typeof useFindManyLoginTokenCountQuery>;
export type FindManyLoginTokenCountLazyQueryHookResult = ReturnType<typeof useFindManyLoginTokenCountLazyQuery>;
export type FindManyLoginTokenCountQueryResult = Apollo.QueryResult<FindManyLoginTokenCountQuery, FindManyLoginTokenCountQueryVariables>;
export const CreateOneLoginTokenDocument = gql`
    mutation createOneLoginToken($data: LoginTokenCreateInput!) {
  createOneLoginToken(data: $data) {
    ...LoginToken
  }
}
    ${LoginTokenFragmentDoc}`;

/**
 * __useCreateOneLoginTokenMutation__
 *
 * To run a mutation, you first call `useCreateOneLoginTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneLoginTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneLoginTokenMutation, { data, loading, error }] = useCreateOneLoginTokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneLoginTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneLoginTokenMutation, CreateOneLoginTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneLoginTokenMutation, CreateOneLoginTokenMutationVariables>(CreateOneLoginTokenDocument, options);
      }
export type CreateOneLoginTokenMutationHookResult = ReturnType<typeof useCreateOneLoginTokenMutation>;
export type CreateOneLoginTokenMutationResult = Apollo.MutationResult<CreateOneLoginTokenMutation>;
export type CreateOneLoginTokenMutationOptions = Apollo.BaseMutationOptions<CreateOneLoginTokenMutation, CreateOneLoginTokenMutationVariables>;
export const UpdateOneLoginTokenDocument = gql`
    mutation updateOneLoginToken($where: LoginTokenWhereUniqueInput!, $data: LoginTokenUpdateInput!) {
  updateOneLoginToken(where: $where, data: $data) {
    ...LoginToken
  }
}
    ${LoginTokenFragmentDoc}`;

/**
 * __useUpdateOneLoginTokenMutation__
 *
 * To run a mutation, you first call `useUpdateOneLoginTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneLoginTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneLoginTokenMutation, { data, loading, error }] = useUpdateOneLoginTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneLoginTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneLoginTokenMutation, UpdateOneLoginTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneLoginTokenMutation, UpdateOneLoginTokenMutationVariables>(UpdateOneLoginTokenDocument, options);
      }
export type UpdateOneLoginTokenMutationHookResult = ReturnType<typeof useUpdateOneLoginTokenMutation>;
export type UpdateOneLoginTokenMutationResult = Apollo.MutationResult<UpdateOneLoginTokenMutation>;
export type UpdateOneLoginTokenMutationOptions = Apollo.BaseMutationOptions<UpdateOneLoginTokenMutation, UpdateOneLoginTokenMutationVariables>;
export const DeleteOneLoginTokenDocument = gql`
    mutation deleteOneLoginToken($where: LoginTokenWhereUniqueInput!) {
  deleteOneLoginToken(where: $where) {
    ...LoginToken
  }
}
    ${LoginTokenFragmentDoc}`;

/**
 * __useDeleteOneLoginTokenMutation__
 *
 * To run a mutation, you first call `useDeleteOneLoginTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneLoginTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneLoginTokenMutation, { data, loading, error }] = useDeleteOneLoginTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneLoginTokenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneLoginTokenMutation, DeleteOneLoginTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneLoginTokenMutation, DeleteOneLoginTokenMutationVariables>(DeleteOneLoginTokenDocument, options);
      }
export type DeleteOneLoginTokenMutationHookResult = ReturnType<typeof useDeleteOneLoginTokenMutation>;
export type DeleteOneLoginTokenMutationResult = Apollo.MutationResult<DeleteOneLoginTokenMutation>;
export type DeleteOneLoginTokenMutationOptions = Apollo.BaseMutationOptions<DeleteOneLoginTokenMutation, DeleteOneLoginTokenMutationVariables>;
export const DeleteManyLoginTokenDocument = gql`
    mutation deleteManyLoginToken($where: LoginTokenWhereInput) {
  deleteManyLoginToken(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyLoginTokenMutation__
 *
 * To run a mutation, you first call `useDeleteManyLoginTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyLoginTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyLoginTokenMutation, { data, loading, error }] = useDeleteManyLoginTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyLoginTokenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyLoginTokenMutation, DeleteManyLoginTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyLoginTokenMutation, DeleteManyLoginTokenMutationVariables>(DeleteManyLoginTokenDocument, options);
      }
export type DeleteManyLoginTokenMutationHookResult = ReturnType<typeof useDeleteManyLoginTokenMutation>;
export type DeleteManyLoginTokenMutationResult = Apollo.MutationResult<DeleteManyLoginTokenMutation>;
export type DeleteManyLoginTokenMutationOptions = Apollo.BaseMutationOptions<DeleteManyLoginTokenMutation, DeleteManyLoginTokenMutationVariables>;
export const UpdateManyLoginTokenDocument = gql`
    mutation updateManyLoginToken($where: LoginTokenWhereInput, $data: LoginTokenUpdateManyMutationInput!) {
  updateManyLoginToken(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyLoginTokenMutation__
 *
 * To run a mutation, you first call `useUpdateManyLoginTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyLoginTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyLoginTokenMutation, { data, loading, error }] = useUpdateManyLoginTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyLoginTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyLoginTokenMutation, UpdateManyLoginTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyLoginTokenMutation, UpdateManyLoginTokenMutationVariables>(UpdateManyLoginTokenDocument, options);
      }
export type UpdateManyLoginTokenMutationHookResult = ReturnType<typeof useUpdateManyLoginTokenMutation>;
export type UpdateManyLoginTokenMutationResult = Apollo.MutationResult<UpdateManyLoginTokenMutation>;
export type UpdateManyLoginTokenMutationOptions = Apollo.BaseMutationOptions<UpdateManyLoginTokenMutation, UpdateManyLoginTokenMutationVariables>;
export const FindUniqueRefreshTokenDocument = gql`
    query findUniqueRefreshToken($where: RefreshTokenWhereUniqueInput!) {
  findUniqueRefreshToken(where: $where) {
    ...RefreshToken
  }
}
    ${RefreshTokenFragmentDoc}`;

/**
 * __useFindUniqueRefreshTokenQuery__
 *
 * To run a query within a React component, call `useFindUniqueRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueRefreshTokenQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueRefreshTokenQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueRefreshTokenQuery, FindUniqueRefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueRefreshTokenQuery, FindUniqueRefreshTokenQueryVariables>(FindUniqueRefreshTokenDocument, options);
      }
export function useFindUniqueRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueRefreshTokenQuery, FindUniqueRefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueRefreshTokenQuery, FindUniqueRefreshTokenQueryVariables>(FindUniqueRefreshTokenDocument, options);
        }
export type FindUniqueRefreshTokenQueryHookResult = ReturnType<typeof useFindUniqueRefreshTokenQuery>;
export type FindUniqueRefreshTokenLazyQueryHookResult = ReturnType<typeof useFindUniqueRefreshTokenLazyQuery>;
export type FindUniqueRefreshTokenQueryResult = Apollo.QueryResult<FindUniqueRefreshTokenQuery, FindUniqueRefreshTokenQueryVariables>;
export const FindManyRefreshTokenDocument = gql`
    query findManyRefreshToken($where: RefreshTokenWhereInput, $orderBy: [RefreshTokenOrderByInput!], $cursor: RefreshTokenWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRefreshToken(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...RefreshToken
  }
}
    ${RefreshTokenFragmentDoc}`;

/**
 * __useFindManyRefreshTokenQuery__
 *
 * To run a query within a React component, call `useFindManyRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyRefreshTokenQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyRefreshTokenQuery(baseOptions?: Apollo.QueryHookOptions<FindManyRefreshTokenQuery, FindManyRefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyRefreshTokenQuery, FindManyRefreshTokenQueryVariables>(FindManyRefreshTokenDocument, options);
      }
export function useFindManyRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyRefreshTokenQuery, FindManyRefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyRefreshTokenQuery, FindManyRefreshTokenQueryVariables>(FindManyRefreshTokenDocument, options);
        }
export type FindManyRefreshTokenQueryHookResult = ReturnType<typeof useFindManyRefreshTokenQuery>;
export type FindManyRefreshTokenLazyQueryHookResult = ReturnType<typeof useFindManyRefreshTokenLazyQuery>;
export type FindManyRefreshTokenQueryResult = Apollo.QueryResult<FindManyRefreshTokenQuery, FindManyRefreshTokenQueryVariables>;
export const FindManyRefreshTokenCountDocument = gql`
    query findManyRefreshTokenCount($where: RefreshTokenWhereInput, $orderBy: [RefreshTokenOrderByInput!], $cursor: RefreshTokenWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRefreshTokenCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyRefreshTokenCountQuery__
 *
 * To run a query within a React component, call `useFindManyRefreshTokenCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyRefreshTokenCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyRefreshTokenCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyRefreshTokenCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyRefreshTokenCountQuery, FindManyRefreshTokenCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyRefreshTokenCountQuery, FindManyRefreshTokenCountQueryVariables>(FindManyRefreshTokenCountDocument, options);
      }
export function useFindManyRefreshTokenCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyRefreshTokenCountQuery, FindManyRefreshTokenCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyRefreshTokenCountQuery, FindManyRefreshTokenCountQueryVariables>(FindManyRefreshTokenCountDocument, options);
        }
export type FindManyRefreshTokenCountQueryHookResult = ReturnType<typeof useFindManyRefreshTokenCountQuery>;
export type FindManyRefreshTokenCountLazyQueryHookResult = ReturnType<typeof useFindManyRefreshTokenCountLazyQuery>;
export type FindManyRefreshTokenCountQueryResult = Apollo.QueryResult<FindManyRefreshTokenCountQuery, FindManyRefreshTokenCountQueryVariables>;
export const CreateOneRefreshTokenDocument = gql`
    mutation createOneRefreshToken($data: RefreshTokenCreateInput!) {
  createOneRefreshToken(data: $data) {
    ...RefreshToken
  }
}
    ${RefreshTokenFragmentDoc}`;

/**
 * __useCreateOneRefreshTokenMutation__
 *
 * To run a mutation, you first call `useCreateOneRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneRefreshTokenMutation, { data, loading, error }] = useCreateOneRefreshTokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneRefreshTokenMutation, CreateOneRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneRefreshTokenMutation, CreateOneRefreshTokenMutationVariables>(CreateOneRefreshTokenDocument, options);
      }
export type CreateOneRefreshTokenMutationHookResult = ReturnType<typeof useCreateOneRefreshTokenMutation>;
export type CreateOneRefreshTokenMutationResult = Apollo.MutationResult<CreateOneRefreshTokenMutation>;
export type CreateOneRefreshTokenMutationOptions = Apollo.BaseMutationOptions<CreateOneRefreshTokenMutation, CreateOneRefreshTokenMutationVariables>;
export const UpdateOneRefreshTokenDocument = gql`
    mutation updateOneRefreshToken($where: RefreshTokenWhereUniqueInput!, $data: RefreshTokenUpdateInput!) {
  updateOneRefreshToken(where: $where, data: $data) {
    ...RefreshToken
  }
}
    ${RefreshTokenFragmentDoc}`;

/**
 * __useUpdateOneRefreshTokenMutation__
 *
 * To run a mutation, you first call `useUpdateOneRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneRefreshTokenMutation, { data, loading, error }] = useUpdateOneRefreshTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneRefreshTokenMutation, UpdateOneRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneRefreshTokenMutation, UpdateOneRefreshTokenMutationVariables>(UpdateOneRefreshTokenDocument, options);
      }
export type UpdateOneRefreshTokenMutationHookResult = ReturnType<typeof useUpdateOneRefreshTokenMutation>;
export type UpdateOneRefreshTokenMutationResult = Apollo.MutationResult<UpdateOneRefreshTokenMutation>;
export type UpdateOneRefreshTokenMutationOptions = Apollo.BaseMutationOptions<UpdateOneRefreshTokenMutation, UpdateOneRefreshTokenMutationVariables>;
export const DeleteOneRefreshTokenDocument = gql`
    mutation deleteOneRefreshToken($where: RefreshTokenWhereUniqueInput!) {
  deleteOneRefreshToken(where: $where) {
    ...RefreshToken
  }
}
    ${RefreshTokenFragmentDoc}`;

/**
 * __useDeleteOneRefreshTokenMutation__
 *
 * To run a mutation, you first call `useDeleteOneRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneRefreshTokenMutation, { data, loading, error }] = useDeleteOneRefreshTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneRefreshTokenMutation, DeleteOneRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneRefreshTokenMutation, DeleteOneRefreshTokenMutationVariables>(DeleteOneRefreshTokenDocument, options);
      }
export type DeleteOneRefreshTokenMutationHookResult = ReturnType<typeof useDeleteOneRefreshTokenMutation>;
export type DeleteOneRefreshTokenMutationResult = Apollo.MutationResult<DeleteOneRefreshTokenMutation>;
export type DeleteOneRefreshTokenMutationOptions = Apollo.BaseMutationOptions<DeleteOneRefreshTokenMutation, DeleteOneRefreshTokenMutationVariables>;
export const DeleteManyRefreshTokenDocument = gql`
    mutation deleteManyRefreshToken($where: RefreshTokenWhereInput) {
  deleteManyRefreshToken(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyRefreshTokenMutation__
 *
 * To run a mutation, you first call `useDeleteManyRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyRefreshTokenMutation, { data, loading, error }] = useDeleteManyRefreshTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyRefreshTokenMutation, DeleteManyRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyRefreshTokenMutation, DeleteManyRefreshTokenMutationVariables>(DeleteManyRefreshTokenDocument, options);
      }
export type DeleteManyRefreshTokenMutationHookResult = ReturnType<typeof useDeleteManyRefreshTokenMutation>;
export type DeleteManyRefreshTokenMutationResult = Apollo.MutationResult<DeleteManyRefreshTokenMutation>;
export type DeleteManyRefreshTokenMutationOptions = Apollo.BaseMutationOptions<DeleteManyRefreshTokenMutation, DeleteManyRefreshTokenMutationVariables>;
export const UpdateManyRefreshTokenDocument = gql`
    mutation updateManyRefreshToken($where: RefreshTokenWhereInput, $data: RefreshTokenUpdateManyMutationInput!) {
  updateManyRefreshToken(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyRefreshTokenMutation__
 *
 * To run a mutation, you first call `useUpdateManyRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyRefreshTokenMutation, { data, loading, error }] = useUpdateManyRefreshTokenMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyRefreshTokenMutation, UpdateManyRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyRefreshTokenMutation, UpdateManyRefreshTokenMutationVariables>(UpdateManyRefreshTokenDocument, options);
      }
export type UpdateManyRefreshTokenMutationHookResult = ReturnType<typeof useUpdateManyRefreshTokenMutation>;
export type UpdateManyRefreshTokenMutationResult = Apollo.MutationResult<UpdateManyRefreshTokenMutation>;
export type UpdateManyRefreshTokenMutationOptions = Apollo.BaseMutationOptions<UpdateManyRefreshTokenMutation, UpdateManyRefreshTokenMutationVariables>;
export const FindUniqueRequestDocument = gql`
    query findUniqueRequest($where: RequestWhereUniqueInput!) {
  findUniqueRequest(where: $where) {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useFindUniqueRequestQuery__
 *
 * To run a query within a React component, call `useFindUniqueRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueRequestQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueRequestQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueRequestQuery, FindUniqueRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueRequestQuery, FindUniqueRequestQueryVariables>(FindUniqueRequestDocument, options);
      }
export function useFindUniqueRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueRequestQuery, FindUniqueRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueRequestQuery, FindUniqueRequestQueryVariables>(FindUniqueRequestDocument, options);
        }
export type FindUniqueRequestQueryHookResult = ReturnType<typeof useFindUniqueRequestQuery>;
export type FindUniqueRequestLazyQueryHookResult = ReturnType<typeof useFindUniqueRequestLazyQuery>;
export type FindUniqueRequestQueryResult = Apollo.QueryResult<FindUniqueRequestQuery, FindUniqueRequestQueryVariables>;
export const FindManyRequestDocument = gql`
    query findManyRequest($where: RequestWhereInput, $orderBy: [RequestOrderByInput!], $cursor: RequestWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRequest(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useFindManyRequestQuery__
 *
 * To run a query within a React component, call `useFindManyRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyRequestQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyRequestQuery(baseOptions?: Apollo.QueryHookOptions<FindManyRequestQuery, FindManyRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyRequestQuery, FindManyRequestQueryVariables>(FindManyRequestDocument, options);
      }
export function useFindManyRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyRequestQuery, FindManyRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyRequestQuery, FindManyRequestQueryVariables>(FindManyRequestDocument, options);
        }
export type FindManyRequestQueryHookResult = ReturnType<typeof useFindManyRequestQuery>;
export type FindManyRequestLazyQueryHookResult = ReturnType<typeof useFindManyRequestLazyQuery>;
export type FindManyRequestQueryResult = Apollo.QueryResult<FindManyRequestQuery, FindManyRequestQueryVariables>;
export const FindManyRequestCountDocument = gql`
    query findManyRequestCount($where: RequestWhereInput, $orderBy: [RequestOrderByInput!], $cursor: RequestWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRequestCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyRequestCountQuery__
 *
 * To run a query within a React component, call `useFindManyRequestCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyRequestCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyRequestCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyRequestCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyRequestCountQuery, FindManyRequestCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyRequestCountQuery, FindManyRequestCountQueryVariables>(FindManyRequestCountDocument, options);
      }
export function useFindManyRequestCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyRequestCountQuery, FindManyRequestCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyRequestCountQuery, FindManyRequestCountQueryVariables>(FindManyRequestCountDocument, options);
        }
export type FindManyRequestCountQueryHookResult = ReturnType<typeof useFindManyRequestCountQuery>;
export type FindManyRequestCountLazyQueryHookResult = ReturnType<typeof useFindManyRequestCountLazyQuery>;
export type FindManyRequestCountQueryResult = Apollo.QueryResult<FindManyRequestCountQuery, FindManyRequestCountQueryVariables>;
export const CreateOneRequestDocument = gql`
    mutation createOneRequest($data: RequestCreateInput!) {
  createOneRequest(data: $data) {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useCreateOneRequestMutation__
 *
 * To run a mutation, you first call `useCreateOneRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneRequestMutation, { data, loading, error }] = useCreateOneRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneRequestMutation, CreateOneRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneRequestMutation, CreateOneRequestMutationVariables>(CreateOneRequestDocument, options);
      }
export type CreateOneRequestMutationHookResult = ReturnType<typeof useCreateOneRequestMutation>;
export type CreateOneRequestMutationResult = Apollo.MutationResult<CreateOneRequestMutation>;
export type CreateOneRequestMutationOptions = Apollo.BaseMutationOptions<CreateOneRequestMutation, CreateOneRequestMutationVariables>;
export const UpdateOneRequestDocument = gql`
    mutation updateOneRequest($where: RequestWhereUniqueInput!, $data: RequestUpdateInput!) {
  updateOneRequest(where: $where, data: $data) {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useUpdateOneRequestMutation__
 *
 * To run a mutation, you first call `useUpdateOneRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneRequestMutation, { data, loading, error }] = useUpdateOneRequestMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneRequestMutation, UpdateOneRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneRequestMutation, UpdateOneRequestMutationVariables>(UpdateOneRequestDocument, options);
      }
export type UpdateOneRequestMutationHookResult = ReturnType<typeof useUpdateOneRequestMutation>;
export type UpdateOneRequestMutationResult = Apollo.MutationResult<UpdateOneRequestMutation>;
export type UpdateOneRequestMutationOptions = Apollo.BaseMutationOptions<UpdateOneRequestMutation, UpdateOneRequestMutationVariables>;
export const DeleteOneRequestDocument = gql`
    mutation deleteOneRequest($where: RequestWhereUniqueInput!) {
  deleteOneRequest(where: $where) {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useDeleteOneRequestMutation__
 *
 * To run a mutation, you first call `useDeleteOneRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneRequestMutation, { data, loading, error }] = useDeleteOneRequestMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneRequestMutation, DeleteOneRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneRequestMutation, DeleteOneRequestMutationVariables>(DeleteOneRequestDocument, options);
      }
export type DeleteOneRequestMutationHookResult = ReturnType<typeof useDeleteOneRequestMutation>;
export type DeleteOneRequestMutationResult = Apollo.MutationResult<DeleteOneRequestMutation>;
export type DeleteOneRequestMutationOptions = Apollo.BaseMutationOptions<DeleteOneRequestMutation, DeleteOneRequestMutationVariables>;
export const DeleteManyRequestDocument = gql`
    mutation deleteManyRequest($where: RequestWhereInput) {
  deleteManyRequest(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyRequestMutation__
 *
 * To run a mutation, you first call `useDeleteManyRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyRequestMutation, { data, loading, error }] = useDeleteManyRequestMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyRequestMutation, DeleteManyRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyRequestMutation, DeleteManyRequestMutationVariables>(DeleteManyRequestDocument, options);
      }
export type DeleteManyRequestMutationHookResult = ReturnType<typeof useDeleteManyRequestMutation>;
export type DeleteManyRequestMutationResult = Apollo.MutationResult<DeleteManyRequestMutation>;
export type DeleteManyRequestMutationOptions = Apollo.BaseMutationOptions<DeleteManyRequestMutation, DeleteManyRequestMutationVariables>;
export const UpdateManyRequestDocument = gql`
    mutation updateManyRequest($where: RequestWhereInput, $data: RequestUpdateManyMutationInput!) {
  updateManyRequest(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyRequestMutation__
 *
 * To run a mutation, you first call `useUpdateManyRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyRequestMutation, { data, loading, error }] = useUpdateManyRequestMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyRequestMutation, UpdateManyRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyRequestMutation, UpdateManyRequestMutationVariables>(UpdateManyRequestDocument, options);
      }
export type UpdateManyRequestMutationHookResult = ReturnType<typeof useUpdateManyRequestMutation>;
export type UpdateManyRequestMutationResult = Apollo.MutationResult<UpdateManyRequestMutation>;
export type UpdateManyRequestMutationOptions = Apollo.BaseMutationOptions<UpdateManyRequestMutation, UpdateManyRequestMutationVariables>;
export const FindUniqueStoryDocument = gql`
    query findUniqueStory($where: StoryWhereUniqueInput!) {
  findUniqueStory(where: $where) {
    ...Story
  }
}
    ${StoryFragmentDoc}`;

/**
 * __useFindUniqueStoryQuery__
 *
 * To run a query within a React component, call `useFindUniqueStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueStoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueStoryQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueStoryQuery, FindUniqueStoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueStoryQuery, FindUniqueStoryQueryVariables>(FindUniqueStoryDocument, options);
      }
export function useFindUniqueStoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueStoryQuery, FindUniqueStoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueStoryQuery, FindUniqueStoryQueryVariables>(FindUniqueStoryDocument, options);
        }
export type FindUniqueStoryQueryHookResult = ReturnType<typeof useFindUniqueStoryQuery>;
export type FindUniqueStoryLazyQueryHookResult = ReturnType<typeof useFindUniqueStoryLazyQuery>;
export type FindUniqueStoryQueryResult = Apollo.QueryResult<FindUniqueStoryQuery, FindUniqueStoryQueryVariables>;
export const FindManyStoryDocument = gql`
    query findManyStory($where: StoryWhereInput, $orderBy: [StoryOrderByInput!], $cursor: StoryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStory(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Story
  }
}
    ${StoryFragmentDoc}`;

/**
 * __useFindManyStoryQuery__
 *
 * To run a query within a React component, call `useFindManyStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStoryQuery(baseOptions?: Apollo.QueryHookOptions<FindManyStoryQuery, FindManyStoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyStoryQuery, FindManyStoryQueryVariables>(FindManyStoryDocument, options);
      }
export function useFindManyStoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyStoryQuery, FindManyStoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyStoryQuery, FindManyStoryQueryVariables>(FindManyStoryDocument, options);
        }
export type FindManyStoryQueryHookResult = ReturnType<typeof useFindManyStoryQuery>;
export type FindManyStoryLazyQueryHookResult = ReturnType<typeof useFindManyStoryLazyQuery>;
export type FindManyStoryQueryResult = Apollo.QueryResult<FindManyStoryQuery, FindManyStoryQueryVariables>;
export const FindManyStoryCountDocument = gql`
    query findManyStoryCount($where: StoryWhereInput, $orderBy: [StoryOrderByInput!], $cursor: StoryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStoryCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyStoryCountQuery__
 *
 * To run a query within a React component, call `useFindManyStoryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStoryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStoryCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStoryCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyStoryCountQuery, FindManyStoryCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyStoryCountQuery, FindManyStoryCountQueryVariables>(FindManyStoryCountDocument, options);
      }
export function useFindManyStoryCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyStoryCountQuery, FindManyStoryCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyStoryCountQuery, FindManyStoryCountQueryVariables>(FindManyStoryCountDocument, options);
        }
export type FindManyStoryCountQueryHookResult = ReturnType<typeof useFindManyStoryCountQuery>;
export type FindManyStoryCountLazyQueryHookResult = ReturnType<typeof useFindManyStoryCountLazyQuery>;
export type FindManyStoryCountQueryResult = Apollo.QueryResult<FindManyStoryCountQuery, FindManyStoryCountQueryVariables>;
export const CreateOneStoryDocument = gql`
    mutation createOneStory($data: StoryCreateInput!) {
  createOneStory(data: $data) {
    ...Story
  }
}
    ${StoryFragmentDoc}`;

/**
 * __useCreateOneStoryMutation__
 *
 * To run a mutation, you first call `useCreateOneStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStoryMutation, { data, loading, error }] = useCreateOneStoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneStoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneStoryMutation, CreateOneStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneStoryMutation, CreateOneStoryMutationVariables>(CreateOneStoryDocument, options);
      }
export type CreateOneStoryMutationHookResult = ReturnType<typeof useCreateOneStoryMutation>;
export type CreateOneStoryMutationResult = Apollo.MutationResult<CreateOneStoryMutation>;
export type CreateOneStoryMutationOptions = Apollo.BaseMutationOptions<CreateOneStoryMutation, CreateOneStoryMutationVariables>;
export const UpdateOneStoryDocument = gql`
    mutation updateOneStory($where: StoryWhereUniqueInput!, $data: StoryUpdateInput!) {
  updateOneStory(where: $where, data: $data) {
    ...Story
  }
}
    ${StoryFragmentDoc}`;

/**
 * __useUpdateOneStoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneStoryMutation, { data, loading, error }] = useUpdateOneStoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneStoryMutation, UpdateOneStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneStoryMutation, UpdateOneStoryMutationVariables>(UpdateOneStoryDocument, options);
      }
export type UpdateOneStoryMutationHookResult = ReturnType<typeof useUpdateOneStoryMutation>;
export type UpdateOneStoryMutationResult = Apollo.MutationResult<UpdateOneStoryMutation>;
export type UpdateOneStoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneStoryMutation, UpdateOneStoryMutationVariables>;
export const DeleteOneStoryDocument = gql`
    mutation deleteOneStory($where: StoryWhereUniqueInput!) {
  deleteOneStory(where: $where) {
    ...Story
  }
}
    ${StoryFragmentDoc}`;

/**
 * __useDeleteOneStoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneStoryMutation, { data, loading, error }] = useDeleteOneStoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneStoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneStoryMutation, DeleteOneStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneStoryMutation, DeleteOneStoryMutationVariables>(DeleteOneStoryDocument, options);
      }
export type DeleteOneStoryMutationHookResult = ReturnType<typeof useDeleteOneStoryMutation>;
export type DeleteOneStoryMutationResult = Apollo.MutationResult<DeleteOneStoryMutation>;
export type DeleteOneStoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneStoryMutation, DeleteOneStoryMutationVariables>;
export const DeleteManyStoryDocument = gql`
    mutation deleteManyStory($where: StoryWhereInput) {
  deleteManyStory(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyStoryMutation__
 *
 * To run a mutation, you first call `useDeleteManyStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyStoryMutation, { data, loading, error }] = useDeleteManyStoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyStoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyStoryMutation, DeleteManyStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyStoryMutation, DeleteManyStoryMutationVariables>(DeleteManyStoryDocument, options);
      }
export type DeleteManyStoryMutationHookResult = ReturnType<typeof useDeleteManyStoryMutation>;
export type DeleteManyStoryMutationResult = Apollo.MutationResult<DeleteManyStoryMutation>;
export type DeleteManyStoryMutationOptions = Apollo.BaseMutationOptions<DeleteManyStoryMutation, DeleteManyStoryMutationVariables>;
export const UpdateManyStoryDocument = gql`
    mutation updateManyStory($where: StoryWhereInput, $data: StoryUpdateManyMutationInput!) {
  updateManyStory(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyStoryMutation__
 *
 * To run a mutation, you first call `useUpdateManyStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyStoryMutation, { data, loading, error }] = useUpdateManyStoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyStoryMutation, UpdateManyStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyStoryMutation, UpdateManyStoryMutationVariables>(UpdateManyStoryDocument, options);
      }
export type UpdateManyStoryMutationHookResult = ReturnType<typeof useUpdateManyStoryMutation>;
export type UpdateManyStoryMutationResult = Apollo.MutationResult<UpdateManyStoryMutation>;
export type UpdateManyStoryMutationOptions = Apollo.BaseMutationOptions<UpdateManyStoryMutation, UpdateManyStoryMutationVariables>;
export const FindUniqueUserDocument = gql`
    query findUniqueUser($where: UserWhereUniqueInput!) {
  findUniqueUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindUniqueUserQuery__
 *
 * To run a query within a React component, call `useFindUniqueUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueUserQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueUserQuery, FindUniqueUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueUserQuery, FindUniqueUserQueryVariables>(FindUniqueUserDocument, options);
      }
export function useFindUniqueUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueUserQuery, FindUniqueUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueUserQuery, FindUniqueUserQueryVariables>(FindUniqueUserDocument, options);
        }
export type FindUniqueUserQueryHookResult = ReturnType<typeof useFindUniqueUserQuery>;
export type FindUniqueUserLazyQueryHookResult = ReturnType<typeof useFindUniqueUserLazyQuery>;
export type FindUniqueUserQueryResult = Apollo.QueryResult<FindUniqueUserQuery, FindUniqueUserQueryVariables>;
export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindManyUserQuery__
 *
 * To run a query within a React component, call `useFindManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserQuery(baseOptions?: Apollo.QueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
      }
export function useFindManyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
        }
export type FindManyUserQueryHookResult = ReturnType<typeof useFindManyUserQuery>;
export type FindManyUserLazyQueryHookResult = ReturnType<typeof useFindManyUserLazyQuery>;
export type FindManyUserQueryResult = Apollo.QueryResult<FindManyUserQuery, FindManyUserQueryVariables>;
export const FindManyUserCountDocument = gql`
    query findManyUserCount($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUserCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyUserCountQuery__
 *
 * To run a query within a React component, call `useFindManyUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, options);
      }
export function useFindManyUserCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, options);
        }
export type FindManyUserCountQueryHookResult = ReturnType<typeof useFindManyUserCountQuery>;
export type FindManyUserCountLazyQueryHookResult = ReturnType<typeof useFindManyUserCountLazyQuery>;
export type FindManyUserCountQueryResult = Apollo.QueryResult<FindManyUserCountQuery, FindManyUserCountQueryVariables>;
export const CreateOneUserDocument = gql`
    mutation createOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, options);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = Apollo.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = Apollo.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserMutation, { data, loading, error }] = useDeleteOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneUserMutation, DeleteOneUserMutationVariables>(DeleteOneUserDocument, options);
      }
export type DeleteOneUserMutationHookResult = ReturnType<typeof useDeleteOneUserMutation>;
export type DeleteOneUserMutationResult = Apollo.MutationResult<DeleteOneUserMutation>;
export type DeleteOneUserMutationOptions = Apollo.BaseMutationOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>;
export const DeleteManyUserDocument = gql`
    mutation deleteManyUser($where: UserWhereInput) {
  deleteManyUser(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyUserMutation__
 *
 * To run a mutation, you first call `useDeleteManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUserMutation, { data, loading, error }] = useDeleteManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyUserMutation, DeleteManyUserMutationVariables>(DeleteManyUserDocument, options);
      }
export type DeleteManyUserMutationHookResult = ReturnType<typeof useDeleteManyUserMutation>;
export type DeleteManyUserMutationResult = Apollo.MutationResult<DeleteManyUserMutation>;
export type DeleteManyUserMutationOptions = Apollo.BaseMutationOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>;
export const UpdateManyUserDocument = gql`
    mutation updateManyUser($where: UserWhereInput, $data: UserUpdateManyMutationInput!) {
  updateManyUser(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyUserMutation__
 *
 * To run a mutation, you first call `useUpdateManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyUserMutation, { data, loading, error }] = useUpdateManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyUserMutation, UpdateManyUserMutationVariables>(UpdateManyUserDocument, options);
      }
export type UpdateManyUserMutationHookResult = ReturnType<typeof useUpdateManyUserMutation>;
export type UpdateManyUserMutationResult = Apollo.MutationResult<UpdateManyUserMutation>;
export type UpdateManyUserMutationOptions = Apollo.BaseMutationOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>;
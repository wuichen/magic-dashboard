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
  /** Json custom scalar type */
  Json: any;
};

export type AggregateLoginToken = {
  __typename?: 'AggregateLoginToken';
  _avg?: Maybe<LoginTokenAvgAggregateOutputType>;
  _count?: Maybe<LoginTokenCountAggregateOutputType>;
  _max?: Maybe<LoginTokenMaxAggregateOutputType>;
  _min?: Maybe<LoginTokenMinAggregateOutputType>;
  _sum?: Maybe<LoginTokenSumAggregateOutputType>;
  avg?: Maybe<LoginTokenAvgAggregateOutputType>;
  count?: Maybe<LoginTokenCountAggregateOutputType>;
  max?: Maybe<LoginTokenMaxAggregateOutputType>;
  min?: Maybe<LoginTokenMinAggregateOutputType>;
  sum?: Maybe<LoginTokenSumAggregateOutputType>;
};

export type AggregateRefreshToken = {
  __typename?: 'AggregateRefreshToken';
  _avg?: Maybe<RefreshTokenAvgAggregateOutputType>;
  _count?: Maybe<RefreshTokenCountAggregateOutputType>;
  _max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  _min?: Maybe<RefreshTokenMinAggregateOutputType>;
  _sum?: Maybe<RefreshTokenSumAggregateOutputType>;
  avg?: Maybe<RefreshTokenAvgAggregateOutputType>;
  count?: Maybe<RefreshTokenCountAggregateOutputType>;
  max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  min?: Maybe<RefreshTokenMinAggregateOutputType>;
  sum?: Maybe<RefreshTokenSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
  avg?: Maybe<UserAvgAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
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


export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};


export type JsonFilter = {
  equals?: Maybe<Scalars['Json']>;
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
  id: Scalars['Int'];
  ip: Scalars['String'];
  secret: Scalars['String'];
  user: User;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
};

export type LoginTokenAvgAggregateOutputType = {
  __typename?: 'LoginTokenAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
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
  id?: Maybe<Scalars['Int']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
};

export type LoginTokenCreateManyUserInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type LoginTokenMinAggregateOutputType = {
  __typename?: 'LoginTokenMinAggregateOutputType';
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
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
  id?: Maybe<IntFilter>;
  ip?: Maybe<StringFilter>;
  secret?: Maybe<StringFilter>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
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
  id?: Maybe<IntWithAggregatesFilter>;
  ip?: Maybe<StringWithAggregatesFilter>;
  secret?: Maybe<StringWithAggregatesFilter>;
  userAgent?: Maybe<StringWithAggregatesFilter>;
  userAgentRaw?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type LoginTokenSumAggregateOutputType = {
  __typename?: 'LoginTokenSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type LoginTokenUncheckedCreateInput = {
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  id?: Maybe<Scalars['Int']>;
  ip: Scalars['String'];
  secret: Scalars['String'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
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
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<IntFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type LoginTokenUncheckedUpdateManyInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type LoginTokenUncheckedUpdateManyWithoutLoginTokensInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  domain?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
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
  id?: Maybe<IntFieldUpdateOperationsInput>;
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
  id?: Maybe<IntFilter>;
  ip?: Maybe<StringFilter>;
  secret?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
};

export type LoginTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneLoginToken: LoginToken;
  createOneRefreshToken: RefreshToken;
  createOneUser: User;
  deleteManyLoginToken: BatchPayload;
  deleteManyRefreshToken: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneLoginToken?: Maybe<LoginToken>;
  deleteOneRefreshToken?: Maybe<RefreshToken>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateManyLoginToken: BatchPayload;
  updateManyRefreshToken: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneLoginToken: LoginToken;
  updateOneRefreshToken: RefreshToken;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneLoginToken: LoginToken;
  upsertOneRefreshToken: RefreshToken;
  upsertOneUser: User;
};


export type MutationCreateOneLoginTokenArgs = {
  data: LoginTokenCreateInput;
};


export type MutationCreateOneRefreshTokenArgs = {
  data: RefreshTokenCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyLoginTokenArgs = {
  where?: Maybe<LoginTokenWhereInput>;
};


export type MutationDeleteManyRefreshTokenArgs = {
  where?: Maybe<RefreshTokenWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneLoginTokenArgs = {
  where: LoginTokenWhereUniqueInput;
};


export type MutationDeleteOneRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
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


export type MutationUpdateManyLoginTokenArgs = {
  data: LoginTokenUpdateManyMutationInput;
  where?: Maybe<LoginTokenWhereInput>;
};


export type MutationUpdateManyRefreshTokenArgs = {
  data: RefreshTokenUpdateManyMutationInput;
  where?: Maybe<RefreshTokenWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneLoginTokenArgs = {
  data: LoginTokenUpdateInput;
  where: LoginTokenWhereUniqueInput;
};


export type MutationUpdateOneRefreshTokenArgs = {
  data: RefreshTokenUpdateInput;
  where: RefreshTokenWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
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

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
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

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};

export type NestedJsonFilter = {
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateLoginToken?: Maybe<AggregateLoginToken>;
  aggregateRefreshToken?: Maybe<AggregateRefreshToken>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstLoginToken?: Maybe<LoginToken>;
  findFirstRefreshToken?: Maybe<RefreshToken>;
  findFirstUser?: Maybe<User>;
  findManyLoginToken: Array<LoginToken>;
  findManyLoginTokenCount: Scalars['Int'];
  findManyRefreshToken: Array<RefreshToken>;
  findManyRefreshTokenCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueLoginToken?: Maybe<LoginToken>;
  findUniqueRefreshToken?: Maybe<RefreshToken>;
  findUniqueUser?: Maybe<User>;
  me?: Maybe<User>;
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


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
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


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
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


export type QueryFindUniqueLoginTokenArgs = {
  where: LoginTokenWhereUniqueInput;
};


export type QueryFindUniqueRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
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
  loginTokenId: Scalars['Int'];
  user: User;
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
  value: Scalars['String'];
};

export type RefreshTokenAvgAggregateOutputType = {
  __typename?: 'RefreshTokenAvgAggregateOutputType';
  loginTokenId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
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
  loginTokenId: Scalars['Int'];
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
  loginTokenId: Scalars['Int'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
  value: Scalars['String'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['Int'];
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
  loginTokenId: Scalars['Int'];
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
  loginTokenId?: Maybe<Scalars['Int']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type RefreshTokenMinAggregateOutputType = {
  __typename?: 'RefreshTokenMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  ip?: Maybe<Scalars['String']>;
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId?: Maybe<Scalars['Int']>;
  userAgent?: Maybe<Scalars['String']>;
  userAgentRaw?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
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
  loginTokenId?: Maybe<IntFilter>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
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
  loginTokenId?: Maybe<IntWithAggregatesFilter>;
  userAgent?: Maybe<StringWithAggregatesFilter>;
  userAgentRaw?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
  value?: Maybe<StringWithAggregatesFilter>;
};

export type RefreshTokenSumAggregateOutputType = {
  __typename?: 'RefreshTokenSumAggregateOutputType';
  loginTokenId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RefreshTokenUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  geo: Scalars['Json'];
  ip: Scalars['String'];
  lastActive?: Maybe<Scalars['DateTime']>;
  loginTokenId: Scalars['Int'];
  userAgent: Scalars['String'];
  userAgentRaw: Scalars['String'];
  userId: Scalars['Int'];
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
  loginTokenId: Scalars['Int'];
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
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
  userAgent?: Maybe<StringFieldUpdateOperationsInput>;
  userAgentRaw?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  geo?: Maybe<Scalars['Json']>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  lastActive?: Maybe<DateTimeFieldUpdateOperationsInput>;
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
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
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
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
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
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
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
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
  loginTokenId?: Maybe<IntFieldUpdateOperationsInput>;
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
  loginTokenId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userAgent?: Maybe<StringFilter>;
  userAgentRaw?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
  value?: Maybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  loginTokenId?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

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
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  loginTokens: Array<LoginToken>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens: Array<RefreshToken>;
  updatedAt: Scalars['DateTime'];
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

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  loginTokens?: Maybe<LoginTokenCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type UserCreateOrConnectWithoutLoginTokensInput = {
  create: UserUncheckedCreateWithoutLoginTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  create: UserUncheckedCreateWithoutRefreshTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLoginTokensInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRefreshTokensInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  loginTokens?: Maybe<LoginTokenCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
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
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  loginTokens?: Maybe<LoginTokenUncheckedCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutLoginTokensInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refreshTokens?: Maybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  loginTokens?: Maybe<LoginTokenUncheckedCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUncheckedUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutLoginTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUncheckedUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutLoginTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  refreshTokens?: Maybe<RefreshTokenUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRefreshTokensInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  loginTokens?: Maybe<LoginTokenUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  loginTokens?: Maybe<LoginTokenListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  refreshTokens?: Maybe<RefreshTokenListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

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

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'name' | 'createdAt' | 'updatedAt'>
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
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  email
  name
  createdAt
  updatedAt
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
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
}
    ${UserFieldsFragmentDoc}`;
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
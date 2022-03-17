// ⚠️⚠️⚠️⚠️ DO NOT EDIT ⚠️⚠️⚠️⚠️
// This file was automatically generated, run yarn gen:gql to update it
/* eslint-disable */

import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QuerycontinentArgs = {
  code: Scalars['ID'];
};


export type QuerycontinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QuerycountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QuerycountryArgs = {
  code: Scalars['ID'];
};


export type QuerylanguageArgs = {
  code: Scalars['ID'];
};


export type QuerylanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type _Entity = Continent | Country | Language;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};


export const GetCountryDocument = /*#__PURE__*/ gql`
    query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    capital
    currency
  }
}
    `;

export function useGetCountryQuery(options: Omit<Urql.UseQueryArgs<GetCountryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCountryQuery>({ query: GetCountryDocument, ...options });
};
export type GetCountryQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, name: string, capital?: string, currency?: string } };

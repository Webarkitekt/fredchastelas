//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export function gql(strings: TemplateStringsArray, ...args: string[]): string {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (args[i] || '')
  })
  return str
}
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  global: Global;
  globalConnection: GlobalConnection;
  pages: Pages;
  pagesConnection: PagesConnection;
  events: Events;
  eventsConnection: EventsConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGlobalArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGlobalConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPagesArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPagesConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryEventsArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryEventsConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Global | Pages | Events;

export type GlobalHeaderNav = {
  __typename?: 'GlobalHeaderNav';
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type GlobalHeader = {
  __typename?: 'GlobalHeader';
  nav?: Maybe<Array<Maybe<GlobalHeaderNav>>>;
};

export type Global = Node & Document & {
  __typename?: 'Global';
  header?: Maybe<GlobalHeader>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type GlobalConnectionEdges = {
  __typename?: 'GlobalConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Global>;
};

export type GlobalConnection = Connection & {
  __typename?: 'GlobalConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<GlobalConnectionEdges>>>;
};

export type PagesBlocksHero = {
  __typename?: 'PagesBlocksHero';
  headline?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
};

export type PagesBlocksContent = {
  __typename?: 'PagesBlocksContent';
  body?: Maybe<Scalars['JSON']>;
};

export type PagesBlocksIntroductionImage = {
  __typename?: 'PagesBlocksIntroductionImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksIntroduction = {
  __typename?: 'PagesBlocksIntroduction';
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<PagesBlocksIntroductionImage>;
};

export type PagesBlocksFeatureLink = {
  __typename?: 'PagesBlocksFeatureLink';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeature = {
  __typename?: 'PagesBlocksFeature';
  subhead?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<PagesBlocksFeatureLink>;
};

export type PagesBlocksTextAndImageImage = {
  __typename?: 'PagesBlocksTextAndImageImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextAndImageLink = {
  __typename?: 'PagesBlocksTextAndImageLink';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextAndImage = {
  __typename?: 'PagesBlocksTextAndImage';
  showIllustrations?: Maybe<Scalars['Boolean']>;
  bgColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  image?: Maybe<PagesBlocksTextAndImageImage>;
  image_position?: Maybe<Scalars['String']>;
  link?: Maybe<PagesBlocksTextAndImageLink>;
};

export type PagesBlocksEvents = {
  __typename?: 'PagesBlocksEvents';
  subhead?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PagesBlocks = PagesBlocksHero | PagesBlocksContent | PagesBlocksIntroduction | PagesBlocksFeature | PagesBlocksTextAndImage | PagesBlocksEvents;

export type Pages = Node & Document & {
  __typename?: 'Pages';
  blocks?: Maybe<Array<Maybe<PagesBlocks>>>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Pages>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Events = Node & Document & {
  __typename?: 'Events';
  title?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type EventsConnectionEdges = {
  __typename?: 'EventsConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Events>;
};

export type EventsConnection = Connection & {
  __typename?: 'EventsConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<EventsConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateGlobal: Global;
  createGlobal: Global;
  updatePages: Pages;
  createPages: Pages;
  updateEvents: Events;
  createEvents: Events;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateGlobalArgs = {
  relativePath: Scalars['String'];
  params: GlobalMutation;
};


export type MutationCreateGlobalArgs = {
  relativePath: Scalars['String'];
  params: GlobalMutation;
};


export type MutationUpdatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationUpdateEventsArgs = {
  relativePath: Scalars['String'];
  params: EventsMutation;
};


export type MutationCreateEventsArgs = {
  relativePath: Scalars['String'];
  params: EventsMutation;
};

export type DocumentMutation = {
  global?: InputMaybe<GlobalMutation>;
  pages?: InputMaybe<PagesMutation>;
  events?: InputMaybe<EventsMutation>;
};

export type GlobalHeaderNavMutation = {
  href?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type GlobalHeaderMutation = {
  nav?: InputMaybe<Array<InputMaybe<GlobalHeaderNavMutation>>>;
};

export type GlobalMutation = {
  header?: InputMaybe<GlobalHeaderMutation>;
};

export type PagesBlocksHeroMutation = {
  headline?: InputMaybe<Scalars['String']>;
  tagline?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksContentMutation = {
  body?: InputMaybe<Scalars['JSON']>;
};

export type PagesBlocksIntroductionImageMutation = {
  src?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksIntroductionMutation = {
  title?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<PagesBlocksIntroductionImageMutation>;
};

export type PagesBlocksFeatureLinkMutation = {
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksFeatureMutation = {
  subhead?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<PagesBlocksFeatureLinkMutation>;
};

export type PagesBlocksTextAndImageImageMutation = {
  src?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksTextAndImageLinkMutation = {
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksTextAndImageMutation = {
  showIllustrations?: InputMaybe<Scalars['Boolean']>;
  bgColor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  image?: InputMaybe<PagesBlocksTextAndImageImageMutation>;
  image_position?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<PagesBlocksTextAndImageLinkMutation>;
};

export type PagesBlocksEventsMutation = {
  subhead?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksMutation = {
  hero?: InputMaybe<PagesBlocksHeroMutation>;
  content?: InputMaybe<PagesBlocksContentMutation>;
  introduction?: InputMaybe<PagesBlocksIntroductionMutation>;
  feature?: InputMaybe<PagesBlocksFeatureMutation>;
  textAndImage?: InputMaybe<PagesBlocksTextAndImageMutation>;
  events?: InputMaybe<PagesBlocksEventsMutation>;
};

export type PagesMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PagesBlocksMutation>>>;
};

export type EventsMutation = {
  title?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
};

export type LayoutQueryFragmentFragment = { __typename?: 'Query', global: { __typename?: 'Global', header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } };

export type PageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PageQueryQuery = { __typename?: 'Query', global: { __typename?: 'Global', header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } };

export type EventsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQueryQuery = { __typename?: 'Query', eventsConnection: { __typename?: 'EventsConnection', edges?: Array<{ __typename?: 'EventsConnectionEdges', node?: { __typename?: 'Events', id: string, _values: any, _sys: { __typename?: 'SystemInfo', filename: string } } | null | undefined } | null | undefined> | null | undefined } };

export type ContentQueryQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type ContentQueryQuery = { __typename?: 'Query', pages: { __typename?: 'Pages', blocks?: Array<{ __typename: 'PagesBlocksHero', headline?: string | null | undefined, tagline?: string | null | undefined } | { __typename: 'PagesBlocksContent', body?: any | null | undefined } | { __typename: 'PagesBlocksIntroduction', title?: string | null | undefined, text?: string | null | undefined, image?: { __typename: 'PagesBlocksIntroductionImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksFeature', subhead?: string | null | undefined, title?: string | null | undefined, link?: { __typename: 'PagesBlocksFeatureLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksTextAndImage', showIllustrations?: boolean | null | undefined, bgColor?: string | null | undefined, title?: string | null | undefined, body?: any | null | undefined, image_position?: string | null | undefined, image?: { __typename: 'PagesBlocksTextAndImageImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined, link?: { __typename: 'PagesBlocksTextAndImageLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksEvents', subhead?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined } };

export type EventQueryQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type EventQueryQuery = { __typename?: 'Query', events: { __typename?: 'Events', title?: string | null | undefined, start_date?: string | null | undefined, end_date?: string | null | undefined, location?: string | null | undefined, type?: string | null | undefined, description?: any | null | undefined } };

export type GlobalPartsFragment = { __typename?: 'Global', header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type PagesPartsFragment = { __typename?: 'Pages', blocks?: Array<{ __typename: 'PagesBlocksHero', headline?: string | null | undefined, tagline?: string | null | undefined } | { __typename: 'PagesBlocksContent', body?: any | null | undefined } | { __typename: 'PagesBlocksIntroduction', title?: string | null | undefined, text?: string | null | undefined, image?: { __typename: 'PagesBlocksIntroductionImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksFeature', subhead?: string | null | undefined, title?: string | null | undefined, link?: { __typename: 'PagesBlocksFeatureLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksTextAndImage', showIllustrations?: boolean | null | undefined, bgColor?: string | null | undefined, title?: string | null | undefined, body?: any | null | undefined, image_position?: string | null | undefined, image?: { __typename: 'PagesBlocksTextAndImageImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined, link?: { __typename: 'PagesBlocksTextAndImageLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksEvents', subhead?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined };

export type EventsPartsFragment = { __typename?: 'Events', title?: string | null | undefined, start_date?: string | null | undefined, end_date?: string | null | undefined, location?: string | null | undefined, type?: string | null | undefined, description?: any | null | undefined };

export type GlobalQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GlobalQuery = { __typename?: 'Query', global: { __typename?: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } };

export type GlobalConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalConnectionQuery = { __typename?: 'Query', globalConnection: { __typename?: 'GlobalConnection', totalCount: number, edges?: Array<{ __typename?: 'GlobalConnectionEdges', node?: { __typename?: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } };

export type PagesQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PagesQuery = { __typename?: 'Query', pages: { __typename?: 'Pages', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PagesBlocksHero', headline?: string | null | undefined, tagline?: string | null | undefined } | { __typename: 'PagesBlocksContent', body?: any | null | undefined } | { __typename: 'PagesBlocksIntroduction', title?: string | null | undefined, text?: string | null | undefined, image?: { __typename: 'PagesBlocksIntroductionImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksFeature', subhead?: string | null | undefined, title?: string | null | undefined, link?: { __typename: 'PagesBlocksFeatureLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksTextAndImage', showIllustrations?: boolean | null | undefined, bgColor?: string | null | undefined, title?: string | null | undefined, body?: any | null | undefined, image_position?: string | null | undefined, image?: { __typename: 'PagesBlocksTextAndImageImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined, link?: { __typename: 'PagesBlocksTextAndImageLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksEvents', subhead?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined } };

export type PagesConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesConnectionQuery = { __typename?: 'Query', pagesConnection: { __typename?: 'PagesConnection', totalCount: number, edges?: Array<{ __typename?: 'PagesConnectionEdges', node?: { __typename?: 'Pages', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PagesBlocksHero', headline?: string | null | undefined, tagline?: string | null | undefined } | { __typename: 'PagesBlocksContent', body?: any | null | undefined } | { __typename: 'PagesBlocksIntroduction', title?: string | null | undefined, text?: string | null | undefined, image?: { __typename: 'PagesBlocksIntroductionImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksFeature', subhead?: string | null | undefined, title?: string | null | undefined, link?: { __typename: 'PagesBlocksFeatureLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksTextAndImage', showIllustrations?: boolean | null | undefined, bgColor?: string | null | undefined, title?: string | null | undefined, body?: any | null | undefined, image_position?: string | null | undefined, image?: { __typename: 'PagesBlocksTextAndImageImage', src?: string | null | undefined, alt?: string | null | undefined } | null | undefined, link?: { __typename: 'PagesBlocksTextAndImageLink', label?: string | null | undefined, url?: string | null | undefined } | null | undefined } | { __typename: 'PagesBlocksEvents', subhead?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } };

export type EventsQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'Events', id: string, title?: string | null | undefined, start_date?: string | null | undefined, end_date?: string | null | undefined, location?: string | null | undefined, type?: string | null | undefined, description?: any | null | undefined, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type EventsConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsConnectionQuery = { __typename?: 'Query', eventsConnection: { __typename?: 'EventsConnection', totalCount: number, edges?: Array<{ __typename?: 'EventsConnectionEdges', node?: { __typename?: 'Events', id: string, title?: string | null | undefined, start_date?: string | null | undefined, end_date?: string | null | undefined, location?: string | null | undefined, type?: string | null | undefined, description?: any | null | undefined, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null | undefined } | null | undefined> | null | undefined } };

export const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  header {
    __typename
    nav {
      __typename
      href
      label
    }
  }
}
    `;
export const LayoutQueryFragmentFragmentDoc = gql`
    fragment LayoutQueryFragment on Query {
  global(relativePath: "index.json") {
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  blocks {
    __typename
    ... on PagesBlocksHero {
      headline
      tagline
    }
    ... on PagesBlocksContent {
      body
    }
    ... on PagesBlocksIntroduction {
      title
      text
      image {
        __typename
        src
        alt
      }
    }
    ... on PagesBlocksFeature {
      subhead
      title
      link {
        __typename
        label
        url
      }
    }
    ... on PagesBlocksTextAndImage {
      showIllustrations
      bgColor
      title
      body
      image {
        __typename
        src
        alt
      }
      image_position
      link {
        __typename
        label
        url
      }
    }
    ... on PagesBlocksEvents {
      subhead
      title
    }
  }
}
    `;
export const EventsPartsFragmentDoc = gql`
    fragment EventsParts on Events {
  title
  start_date
  end_date
  location
  type
  description
}
    `;
export const PageQueryDocument = gql`
    query PageQuery {
  ...LayoutQueryFragment
}
    ${LayoutQueryFragmentFragmentDoc}`;
export const EventsQueryDocument = gql`
    query EventsQuery {
  eventsConnection {
    edges {
      node {
        id
        _values
        _sys {
          filename
        }
      }
    }
  }
}
    `;
export const ContentQueryDocument = gql`
    query ContentQuery($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const EventQueryDocument = gql`
    query EventQuery($relativePath: String!) {
  events(relativePath: $relativePath) {
    ...EventsParts
  }
}
    ${EventsPartsFragmentDoc}`;
export const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GlobalConnectionDocument = gql`
    query globalConnection {
  globalConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection {
  pagesConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const EventsDocument = gql`
    query events($relativePath: String!) {
  events(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventsParts
  }
}
    ${EventsPartsFragmentDoc}`;
export const EventsConnectionDocument = gql`
    query eventsConnection {
  eventsConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventsParts
      }
    }
  }
}
    ${EventsPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      PageQuery(variables?: PageQueryQueryVariables, options?: C): Promise<{data: PageQueryQuery, variables: PageQueryQueryVariables, query: string}> {
        return requester<{data: PageQueryQuery, variables: PageQueryQueryVariables, query: string}, PageQueryQueryVariables>(PageQueryDocument, variables, options);
      },
    EventsQuery(variables?: EventsQueryQueryVariables, options?: C): Promise<{data: EventsQueryQuery, variables: EventsQueryQueryVariables, query: string}> {
        return requester<{data: EventsQueryQuery, variables: EventsQueryQueryVariables, query: string}, EventsQueryQueryVariables>(EventsQueryDocument, variables, options);
      },
    ContentQuery(variables: ContentQueryQueryVariables, options?: C): Promise<{data: ContentQueryQuery, variables: ContentQueryQueryVariables, query: string}> {
        return requester<{data: ContentQueryQuery, variables: ContentQueryQueryVariables, query: string}, ContentQueryQueryVariables>(ContentQueryDocument, variables, options);
      },
    EventQuery(variables: EventQueryQueryVariables, options?: C): Promise<{data: EventQueryQuery, variables: EventQueryQueryVariables, query: string}> {
        return requester<{data: EventQueryQuery, variables: EventQueryQueryVariables, query: string}, EventQueryQueryVariables>(EventQueryDocument, variables, options);
      },
    global(variables: GlobalQueryVariables, options?: C): Promise<{data: GlobalQuery, variables: GlobalQueryVariables, query: string}> {
        return requester<{data: GlobalQuery, variables: GlobalQueryVariables, query: string}, GlobalQueryVariables>(GlobalDocument, variables, options);
      },
    globalConnection(variables?: GlobalConnectionQueryVariables, options?: C): Promise<{data: GlobalConnectionQuery, variables: GlobalConnectionQueryVariables, query: string}> {
        return requester<{data: GlobalConnectionQuery, variables: GlobalConnectionQueryVariables, query: string}, GlobalConnectionQueryVariables>(GlobalConnectionDocument, variables, options);
      },
    pages(variables: PagesQueryVariables, options?: C): Promise<{data: PagesQuery, variables: PagesQueryVariables, query: string}> {
        return requester<{data: PagesQuery, variables: PagesQueryVariables, query: string}, PagesQueryVariables>(PagesDocument, variables, options);
      },
    pagesConnection(variables?: PagesConnectionQueryVariables, options?: C): Promise<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}> {
        return requester<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}, PagesConnectionQueryVariables>(PagesConnectionDocument, variables, options);
      },
    events(variables: EventsQueryVariables, options?: C): Promise<{data: EventsQuery, variables: EventsQueryVariables, query: string}> {
        return requester<{data: EventsQuery, variables: EventsQueryVariables, query: string}, EventsQueryVariables>(EventsDocument, variables, options);
      },
    eventsConnection(variables?: EventsConnectionQueryVariables, options?: C): Promise<{data: EventsConnectionQuery, variables: EventsConnectionQueryVariables, query: string}> {
        return requester<{data: EventsConnectionQuery, variables: EventsConnectionQueryVariables, query: string}, EventsConnectionQueryVariables>(EventsConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    let data = {};
    try {
      data = await client.request({
        query: doc,
        variables: vars,
      });
    } catch (e) {
      // swallow errors related to document creation
      console.warn("Warning: There was an error when fetching data");
      console.warn(e);
    }

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql" }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};


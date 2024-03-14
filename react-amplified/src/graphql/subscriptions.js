/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToLiveMessages = /* GraphQL */ `
  subscription SubscribeToLiveMessages {
    subscribeToLiveMessages
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
      title
      content
      authors
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
      title
      content
      authors
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
      title
      content
      authors
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const broadcastLiveMessage = /* GraphQL */ `
  mutation BroadcastLiveMessage($message: String) {
    broadcastLiveMessage(message: $message)
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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

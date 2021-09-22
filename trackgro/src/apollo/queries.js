import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query getBooks {
    books {
      processId
      heading
      content
      imageUrl
    }
  }
`;

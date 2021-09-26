import gql from "graphql-tag";

// export const GET_PROCESS = gql`
//   query GetAllProcesses($id: Int!) {
//     processes {
//       processId
//       heading
//       content
//       imageUrl
//     }
//   }
// `;
export const GET_PROCESS = gql`
  query GetAllProcesses {
    processes {
      processId
      heading
      content
      imageUrl
    }
  }
`;

export const GET_ITEM_DETAILS = gql`
  query GetItemDetails {
    itemDetail {
      id
      name
      imageUrl
      nutrition {
        protein
        calories
        fat
      }
    }
  }
`;

export const GET_DETAILED_CONTENT = gql`
  query GetDetailedContent {
    content {
      description
    }
  }
`;

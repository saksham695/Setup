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
      componyLogoUrl
      companyName
      nutrition {
        protein
        calories
        fat
      }
      user {
        userId
        name
        address
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

export const ADD_USER_DETAILS = gql`
  mutation AddUserDetails(
    $orderId: Int!
    $name: String!
    $phoneNumber: String!
  ) {
    orderId
    name
    phoneNumber
  }
`;

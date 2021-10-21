import gql from "graphql-tag";
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql'

export const GET_PROCESS = gql`
  query SomeOptionalMutationName($id: Int!) {
    GetAllProcesses(id: $id) {
      processId
      heading
      content
      imageUrl
    }
  }
`;

export const GET_ITEM_DETAILS = gql`
  query SomeOptionalMutationName($id: Int!) {
    GetItemDetails(id: $id) {
      name
      imageUrl
      nutrition {
        calories
        protein
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
  query SomeOptionalMutationName($id: Int!){
    GetDetailedContent(id:$id) {
    content {
      description
    }
  }
}
`;


const UserDetailsInput = new GraphQLObjectType({
  name: 'Input',
  description: 'User type definition',
  fields: () => ({
    orderId: {
          type: GraphQLInt,
      },
    name: {
          type: GraphQLString,
      },
    phoneNumber: {
          type: GraphQLString,
      }
  }),
});

export const ADD_USER_DETAILS = gql`
mutation SomeOptionalMutationName($input:UserDetailsInput!){
  AddUserDetails(input:$input)
}
`;

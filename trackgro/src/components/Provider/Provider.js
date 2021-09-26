import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/config";
import {
  detailedContentMock,
  itemDetailsQueryMock,
  processQueryMock,
} from "../../apollo/mocks";

export const Provider = ({ useMocks, children }) => {
  if (useMocks)
    return (
      <MockedProvider
        mocks={[processQueryMock, itemDetailsQueryMock, detailedContentMock]}
      >
        <>{children}</>
      </MockedProvider>
    );
  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  );
};

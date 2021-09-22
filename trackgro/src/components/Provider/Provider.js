import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/config";
import { booksQueryMock } from "../../apollo/mocks";

export const Provider = ({ useMocks, children }) => {
  console.log("useMocks", useMocks);
  if (useMocks)
    return (
      <MockedProvider mocks={[booksQueryMock]}>
        <>{children}</>
      </MockedProvider>
    );
  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  );
};

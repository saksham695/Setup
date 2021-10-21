import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { schemaLink } from './schema'
import gql from "graphql-tag";
export const cache = new InMemoryCache()

const link = createHttpLink({
    /** Your graphql endpoint */
    uri: 'http://localhost:8080/query',
})

export const client = new ApolloClient({
    connectToDevTools: true,
    link: ApolloLink.from([link, (schemaLink as unknown) as ApolloLink]),
    cache,
    resolvers: {},
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
    },
})


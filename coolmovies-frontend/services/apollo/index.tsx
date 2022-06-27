import { ReactNode, useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider as RootApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import buildApolloCache from "./cache";
import buildApolloLink from "./link";

type BuildApolloClient = (
  config?: Record<string, any>
) => ApolloClient<NormalizedCacheObject>;

const buildApolloClient: BuildApolloClient = (config) =>
  new ApolloClient({
    link: buildApolloLink(config),
    cache: buildApolloCache(config),
  });

export const client = buildApolloClient();

type ApolloProviderProps = {
  children: ReactNode;
};

export default function ApolloProvider({ children }: ApolloProviderProps) {
  return <RootApolloProvider client={client}>{children}</RootApolloProvider>;
}

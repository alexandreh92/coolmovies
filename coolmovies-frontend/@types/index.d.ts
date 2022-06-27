import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

declare global {
  export type CreateStoreOptions = {
    epicDependencies?: EpicDependencies;
  };

  export type EpicDependencies = {
    client: ApolloClient<NormalizedCacheObject>;
  };
}

export {};

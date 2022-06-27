import { InMemoryCache, InMemoryCacheConfig } from "@apollo/client";

type BuildApolloCache = (config?: InMemoryCacheConfig) => InMemoryCache;

const buildApolloCache: BuildApolloCache = (config) => {
  return new InMemoryCache(config);
};

export default buildApolloCache;

import { from, ApolloLink } from "@apollo/client";
import errorLink from "./errorLink";
import httpLink from "./httpLink";

type BuildApolloLink = (config?: Record<string, any>) => ApolloLink;

const buildApolloLink: BuildApolloLink = (config) => {
  return from([errorLink(config), httpLink]);
};

export default buildApolloLink;

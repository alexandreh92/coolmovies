import { ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

type ErrorLink = (config?: Record<string, any>) => ApolloLink;

const errorLink: ErrorLink = (config) => {
  return onError((error) => {
    console.log(error);
  });
};

export default errorLink;

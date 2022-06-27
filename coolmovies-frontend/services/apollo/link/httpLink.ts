import { HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "/graphql",
});

export default httpLink;

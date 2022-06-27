import { HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.API_URL,
});

export default httpLink;

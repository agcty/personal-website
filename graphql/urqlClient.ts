import { createClient } from "urql";

const client = createClient({
  url: "https://235nsdqr.api.sanity.io/v1/graphql/production/default",
});

export default client;

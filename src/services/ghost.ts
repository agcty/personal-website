import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const ghost = new GhostContentAPI({
  url: "https://agcty.ghost.io",
  key: "9f6087b4ff262d1c967b5c06f1",
  version: "v3",
});

export default ghost;

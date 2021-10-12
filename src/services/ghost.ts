import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const ghost = new GhostContentAPI({
  url: "https://gogl-publishing.ghost.io",
  key: "f5cf11d678abec5dcb958789db",
  version: "v3",
});

export default ghost;

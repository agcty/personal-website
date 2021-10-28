import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const ghost = new GhostContentAPI({
  url: "https://blog.gogl.io",
  key: "497acf38f58e7c678191b93ecc",
  version: "v3",
});

export default ghost;

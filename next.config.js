module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ["source.unsplash.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

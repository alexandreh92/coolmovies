/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: process.env.API_URL,
      },
    ];
  },
  reactStrictMode: true,
};

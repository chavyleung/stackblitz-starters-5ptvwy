console.log(process.env)

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    // process.env.redirect_url is undefined
    { destination: process.env.redirect_url, permanent: false, source: '/' },
  ],
};

module.exports = nextConfig;

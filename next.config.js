console.log(process.env)

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    ...getRedirects(),
  ],
};

function getRedirects() {
  return [
    { destination: process.env.redirect_url, permanent: false, source: '/' },
  ]
}

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/flights/:path*',
          destination: 'http://api.aviationstack.com/v1/flights/:path*',
        },
      ]
    },
  };
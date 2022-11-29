/** @type {import('next').NextConfig} */
const baseURL = '/testResult/';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: `${baseURL}INTJ`,
        destination: `${baseURL}milk-cow1`,
        permanent: false,
      },
      {
        source: `${baseURL}ISTJ`,
        destination: `${baseURL}milk-cow2`,
        permanent: false,
      },
      {
        source: `${baseURL}ENFJ`,
        destination: `${baseURL}quokka`,
        permanent: false,
      },
      {
        source: `${baseURL}ISFP`,
        destination: `${baseURL}elephant1`,
        permanent: false,
      },
      {
        source: `${baseURL}ISTP`,
        destination: `${baseURL}elephant2`,
        permanent: false,
      },
      {
        source: `${baseURL}ENTP`,
        destination: `${baseURL}rabbit1`,
        permanent: false,
      },
      {
        source: `${baseURL}ESTP`,
        destination: `${baseURL}rabbit2`,
        permanent: false,
      },
      {
        source: `${baseURL}ENFP`,
        destination: `${baseURL}frog`,
        permanent: false,
      },
      {
        source: `${baseURL}ISFJ`,
        destination: `${baseURL}duck1`,
        permanent: false,
      },
      {
        source: `${baseURL}INFJ`,
        destination: `${baseURL}duck2`,
        permanent: false,
      },
      {
        source: `${baseURL}ESFJ`,
        destination: `${baseURL}pig`,
        permanent: false,
      },
      {
        source: `${baseURL}ESFP`,
        destination: `${baseURL}puppy`,
        permanent: false,
      },
      {
        source: `${baseURL}INFP`,
        destination: `${baseURL}bear1`,
        permanent: false,
      },
      {
        source: `${baseURL}INTP`,
        destination: `${baseURL}bear2`,
        permanent: false,
      },
      {
        source: `${baseURL}ESTJ`,
        destination: `${baseURL}giraffe1`,
        permanent: false,
      },
      {
        source: `${baseURL}ENTJ`,
        destination: `${baseURL}giraffe2`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

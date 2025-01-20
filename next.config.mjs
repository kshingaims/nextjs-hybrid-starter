/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    env: {
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_DATABASE: process.env.DB_DATABASE,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_PORT: process.env.DB_PORT,
    },
  };
  

export default nextConfig;

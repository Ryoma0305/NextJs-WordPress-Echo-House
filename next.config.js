/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja"
  },
  images: {
    domains: [process.env.WP_IMAGES_URL]
  }
};

module.exports = nextConfig;

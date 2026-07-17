/** @type {import('next').NextConfig} */
const nextConfig = {
  /* 설정 옵션 */
};
module.exports = nextConfig;

module.exports = {
  turbopack: {
    // Example: adding an alias and custom file extension
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
}
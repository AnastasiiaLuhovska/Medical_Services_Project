module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'next/core-web-vitals',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.next'],
  rules: {
    'no-unused-vars': ['warn'],
  },
}
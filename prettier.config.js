const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^(.*).css$',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/actions/(.*)$',
    '^@/assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

module.exports = config

module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^[./]',
    '',
    '<TYPES>',
    '<TYPES>^[./]',
  ],
  // plugins: ['prettier-plugin-sort-json', '@ianvs/prettier-plugin-sort-imports'],
  printWidth: 120,
};

module.exports = {
  extends: ['@terenceodonoghue/node'],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};

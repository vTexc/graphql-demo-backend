const {
  cryptHelper,
  authHelper,
} = require('./utils');

module.exports = ({ req }) => {
  const { headers: { authorization } } = req;
  return null;
};

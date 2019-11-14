const jwt = require('jsonwebtoken');

const tokenize = (args) => {
  return jwt.sign(args, process.env.JWT_SECRET);
};

const untokenize = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true });
};

module.exports = {
  tokenize,
  untokenize,
};

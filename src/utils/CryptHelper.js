const bcrypt = require('bcryptjs');
const crypt = require('crypto-js');

const encrypt = (text) => {
  return crypt.AES.encrypt(typeof text === 'string' ? text : JSON.stringify(text), process.env.AES_SECRET).toString();
};

const decrypt = (text) => {
  return crypt.AES.decrypt(text, process.env.AES_SECRET).toString(crypt.enc.Utf8);
};

const hash = (value, salt = bcrypt.genSaltSync(10)) => {
  return bcrypt.hashSync(value, salt);
};

const compareHashs = (hash1, hash2) => {
  return bcrypt.compareSync(hash1, hash2);
};

module.exports = {
  hash,
  compareHashs,
  encrypt,
  decrypt,
};

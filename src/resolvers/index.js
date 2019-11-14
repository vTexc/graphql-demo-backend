/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');

const normalizedPath = path.join(__dirname, '/');

const toExport = {
};

require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file === path.basename(__filename)) return;
  toExport[file] = require(`./${file}`);
});

module.exports = toExport;

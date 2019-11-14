/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const { functions } = require('../../utils');

const normalizedPath = path.join(__dirname, '/');

const toExport = {
  healthCheck: () => 'API is running',
};

require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file === path.basename(__filename) || !functions.isSomeExtension(file, ['js'])) return;
  Object.assign(toExport, require(`./${file}`));
});

module.exports = toExport;

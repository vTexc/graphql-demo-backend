/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const { functions } = require('../utils');

const normalizedPath = path.join(__dirname, '/');

const toExport = [`
type Query {
  healthCheck: String
}

type Mutation {
  healthCheck: String
}
`];

require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file === path.basename(__filename) || !functions.isSomeExtension(file, ['js'])) return;
  toExport.push(require(`./${file}`));
});

module.exports = toExport;

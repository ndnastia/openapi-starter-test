const ChangeTokenUrl = require('./decorators/change-token-url');
const id = 'plugin';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    'change-token-url': ChangeTokenUrl,
  },
};

module.exports = {
  id,
  decorators,
};
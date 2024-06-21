module.exports = ChangeTokenUrl;

/** @type {import('@redocly/cli').OasDecorator} */
function ChangeTokenUrl({ tokenUrl }) {
  return {
    OAuth2Flows: {
      leave(flows, ctx) {
        if (tokenUrl) {
          flows.clientCredentials.tokenUrl = tokenUrl;
        }
      },
    },
  };
}
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { GuessPlugin } = require("guess-webpack");
module.exports = function(api) {
  const reportProvider = {
    "/": {
      "/markdown-test-file": 80,
      "/a-post-with-a-cover-image": 20
    },
    "/markdown-test-file": {
      "/": 80,
      "/tag/Markdown": 80
    },
    "/a-post-with-a-cover-image": {
      "/": 80,
      "/tag/Markdown": 40
    },
    "/say-hello-to-gridsome": {
      "/": 80,
      "/tag/Markdown": 20
    },
    "/tag/Markdown": {
      "/say-hello-to-gridsome": 80,
      "/markdown-test-file": 60,
      "/a-post-with-a-cover-image": 40,
      "/": 20
    }
  };

  const guessOptions = {
    reportProvider: () => reportProvider,
    // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
    runtime: {
      delegate: true
    },
    // Guess does not have to collect the routes and the corresponding bundle entry points.
    routeProvider: false
  };

  api.configureWebpack(config => {
    config.plugins.push(new GuessPlugin(guessOptions));
  });
};

module.exports = {
  plugins: [
    [
      "proposal-decorators",
      {
        legacy: true
      }
    ],
    ["transform-md-import-to-string"]
  ],
  env: {
    development: {
      presets: ["react-app"]
    },
    production: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage"
            // "corejs": 3,
          }
        ],
        "react-app"
      ]
    },
    test: {}
  }
};

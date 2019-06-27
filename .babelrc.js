module.exports = {
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    ["@babel/plugin-proposal-class-properties"],
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

module.exports = {
    transform: {//Tell Jest all js filed need to be transformed
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {//Tells Jest How to handle imports
      ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testEnvironmentOptions: {
      url: `http://localhost`,
    },
    setupFiles: [`<rootDir>/loadershim.js`],
  }
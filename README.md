# Create a new project
- **npm init** Create a new project from scratch
# Install a dependency to package.json
- **npm install --save express** Install express library
- **npm i -S mongodb** Or using shortkey to install driver for MongoDB
# Install a dev dependency
- **npm i --save-dev webpack** Install Webpack as dev dependency
- **npm i -D webpack-cli** Install webpack cli to create webpack.config.js
- **npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react** Install babel packages
- **npm i -D nodemon** Install nodemon, it is used to redeploy app after changings
- **npm i -D eslint eslint-plugin-react babel-eslint** Install eslint, it is used to debug errors
- **npm i -S express@4.14.0** Install express with given version
# Fix npm low severity vulnerability
- **npm audit** To see problem
- **npm audit fix** To fix problem

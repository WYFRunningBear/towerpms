 const path = require("path")
 const { override, fixBabelImports,addLessLoader,addWebpackAlias  } = require('customize-cra');
 const theme = require("./theme.js")
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: true,
   }),
   addLessLoader({
      javascriptEnabled: true,
      modifyVars: theme,
    }),
    addWebpackAlias({
      '@':path.resolve(__dirname, "src")
    }),
 );
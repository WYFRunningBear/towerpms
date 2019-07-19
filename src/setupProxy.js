const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/api", { 
       target: "http://123.126.34.176:20102" ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    }));
    
};
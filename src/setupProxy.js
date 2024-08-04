// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://test.api.boxigo.in",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove the /api prefix when forwarding requests
      },
    })
  );
};

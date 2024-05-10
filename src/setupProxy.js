const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/proxy_plants', (req, res, next) => {
    createProxyMiddleware({
      target: 'http://api.nongsaro.go.kr',
      changeOrigin: true,
      pathRewrite: { '^/proxy_plants': '' },
    })(req, res, next);
  });

  app.use('/proxy_bug', (req, res, next) => {
    createProxyMiddleware({
      target: 'https://ncpms.rda.go.kr/npmsAPI',
      changeOrigin: true,
      pathRewrite: { '^/proxy_bug': '' },
    })(req, res, next);
  });
};

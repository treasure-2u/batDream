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

  // 미세먼지 위젯
  app.use(
    '/dust_api',
    createProxyMiddleware({
      target: 'http://openapi.seoul.go.kr:8088',
      changeOrigin: true,
      pathRewrite: {
        '^/dust_api': '', // '/api'로 시작하는 경로를 빈 문자열로 대체
      },
    }),
  );
};

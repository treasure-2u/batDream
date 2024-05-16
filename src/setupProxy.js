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

  app.use('/dust_api', (req, res, next) => {
    createProxyMiddleware({
      target: 'http://openapi.seoul.go.kr:8088',
      changeOrigin: true,
      pathRewrite: { '^/dust_api': '' }, // 경로를 빈 문자열로 대체
      secure: false, // HTTPS 검증 비활성화 (개발용)
    })(req, res, next);
  });
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ws/rest/logistics/v1',
    createProxyMiddleware({
      target: 'https://c03-usa-east.integrate.boomi.com',
      changeOrigin: true,
      auth: 'DummyUser@blueorangeintegrationtech-AD9F0T.WSHFWA:efb29cfc-64e3-43cd-b550-4ad68de166f0'
    })
  );
};



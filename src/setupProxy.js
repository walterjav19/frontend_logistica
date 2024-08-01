const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ws/rest',
    createProxyMiddleware({
      target: 'https://c03-usa-east.integrate-test.boomi.com',
      changeOrigin: true,
      auth: 'walterjav@trainingwaltersantizo-YER2DZ.UPLN04:bc2bc710-aafe-4614-8e74-f5341356668d'
    })
  );
};

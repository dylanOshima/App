const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy(['/ping', '/api/test'], { target: 'http://localhost:8083/' }));
};
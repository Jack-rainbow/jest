/**
 * 本地服务器，接口请求代理。处理跨域
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */

const apiServer = process.env.API_SERVER

module.exports = {
  mock: {
    '/xpaas-enterprise-contact': apiServer,
    '/xpaas-console-api': apiServer,
    '/xpaas-staff-center': apiServer,
    '/deepexi-dashboard': apiServer,
    '/meta-program': apiServer
  },
  dev: {
    '/xpaas-enterprise-contact': apiServer,
    '/xpaas-console-api': apiServer,
    '/xpaas-staff-center': apiServer,
    '/deepexi-dashboard': apiServer,
    '/meta-program': apiServer
  }
}

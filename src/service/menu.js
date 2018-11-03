const request = require('request')
const menuConf = require('../../config/index.js')

module.exports = async function setMenu(ctx, next) {
  let accessToken = ctx.accessToken;
  if (accessToken) {
    request.post({
      url: `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${accessToken}`,
      headers: {
        'content-type': 'application/json'
      },
      json: true,
      body: menuConf.menu
    }, async function(err, res, body) {
      if (err) {
        setTimeout(() => {
          return setMenu()
        }, 60 * 1000);
      } else {
        return await next()
      }
    })
  } else {
    setTimeout(() => {
      return setMenu();
    }, 60 * 1000);
  }
}

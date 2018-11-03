const config = require('../../config/index.js')
const request = require('request')
const fs = require('fs')
const path = require('path')

function getToken () {
  var url = config.url.wechatToken
  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      qs:  {
        grant_type: 'client_credential',
        appid: config.wechat.appID,
        secret: config.wechat.appSecret
      }
    }, (err, res, body) => {
      if(err) {
        reject(err)
      } else if(res.statusCode === 200 && body) {
        resolve(JSON.parse(body))
      } else {
        reject({
          message: 'response empty'
        })
      }
    })
  })
}

function writeToken(data) {
    fs.writeFileSync(path.join(__dirname, '../../data/token.json'), JSON.stringify({
      oToken: data.access_token,
      expire: data.expires_in * 1000 + new Date().getTime()
    }, null, 2), {
        encoding: 'utf8',
        stdio: [
          process.stdin,
          process.stdout,
          process.stderr
        ]
    })
}

module.exports = async (ctx, next) => {
  const { oToken, expire } = require(path.join(__dirname, '../../data/token.json'))
  if(expire && oToken && new Date(expire).getTime() <= new Date().getTime() || !expire || !oToken) {
    try {
      const res = await getToken()
      writeToken(res)
      ctx.accessToken = res.access_token
    } catch (error) {
      console.error(error.message)
    }
  } else {
    ctx.accessToken = oToken
  }
  await next()
}

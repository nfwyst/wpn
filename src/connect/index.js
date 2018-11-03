const sha1 = require('sha1')
const config = require('../../config/index.js')

// only serve for wechat
module.exports = async (ctx, next) => {
  let token = config.wechat.token
  const {
    signature,
    nonce,
    timestamp,
    echostr
  } = ctx.query
  let str = [token, timestamp, nonce].sort().join('')
  let sha = sha1(str)
  if (sha === signature) {
    if(ctx.method === 'GET') {
      ctx.body = echostr
    } else if(ctx.method === 'POST') {
      await next()
    } else {
      ctx.body = 'faild'
    }
  } else {
    ctx.body = 'faild'
  }
}

const templater = require('../../data/template.js')

module.exports = async (ctx, next) => {
  const { Event } = ctx.req.body
  if (Event === 'subscribe') {
    ctx.body = templater({
      ...ctx.req.body,
      Content: '感谢您的关注'
    })
  }
  // other event
  await next()
}

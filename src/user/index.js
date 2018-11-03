const eventHandler = require('./event.js')
const messageHandler = require('./message.js')

module.exports = async (ctx, next) => {
  const { MsgType } = ctx.req.body

  ctx.status = 200
  ctx.type = 'application/xml'

  if (MsgType === 'event') {
    return eventHandler(ctx, next)
  } else if(MsgType === 'text') {
    return messageHandler(ctx, next)
  }
  // other type
}

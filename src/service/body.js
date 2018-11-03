const bodyParser = require('raw-body')
const xml2js = require('xml2js')

function parse(result) {
  var message = {};
  if(typeof result !== 'object') return result || message
  for(let [k, v] of Object.entries(result)) {
    if(!(v instanceof Array) || v.length === 0) continue
    if(v.length === 1) {
      var val = v[0] || ''
      typeof val === 'object' ? (message[k] = parse(val)) : (message[k] = val.trim ? val.trim() : val)
    } else {
      message[k] = []
      v.forEach(item => {
        message[k].push(parse(item))
      })
    }
  }
  return message;
}

module.exports = async (ctx, next) => {
  var data = await bodyParser(ctx.req, {
    length: ctx.length,
    limit: '1mb',
    encoding: ctx.charset
  })
  xml2js.parseString(data, {
    trim: true
  }, async (err, con) => {
    if(!err) {
      ctx.req.body = parse(con.xml ? con.xml : {})
    }
    await next()
  })
}

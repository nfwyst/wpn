'use strict'
const Koa = new (require('koa'))()
const connect = require('./src/connect/index.js')
const token = require('./src/service/token.js')
const parseBody = require('./src/service/body.js')
const user = require('./src/user/index.js')
const menu = require('./src/service/menu.js')

const Ap = function(ap) {
  return (...args) => {
    args.forEach(item => {
      ap.use(item)
    })
  }
}
const app = Ap(Koa)
app(
  connect,
  token,
  parseBody,
  user,
  menu
)
Koa.listen(80, () => {
  console.log('server is listening on 80')
})

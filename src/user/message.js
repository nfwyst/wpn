const templater = require('../../data/template.js')

module.exports = async (ctx, next) => {
  if(ctx.req.body.Content.includes('文章')) {
    ctx.body = templater({
      ...ctx.req.body,
      Content: [{
        Title: "推送标题",
        Description: "推送描述",
        PicUrl: "://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg",
        Url: "http://blog.csdn.net/hvkcoder/article/details/72868520"
      }]
    })
  } else {
    ctx.body = templater(ctx.req.body)
  }
  await next()
}

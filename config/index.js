const config = {
  wechat: {
    appID: 'wx1297d5c3e6798ba2',
    appSecret: 'b9c2dc84ce7b8568815d9c14398fec46',
    token: 'shanghaihanson'
  },
  url: {
    wechatToken: 'https://api.weixin.qq.com/cgi-bin/token'
  },
  menu: {
    button: [{
        name: '1',
        sub_button: [{
          type: 'view',
          name: '1-1',
          url: 'http://www.baidu.com'
        },{
          type: 'view',
          name: '1-2',
          url: 'http://www.baidu.com'
        },{
          type: 'view',
          name: '1-3',
          url: 'http://www.baidu.com'
        },{
          type: 'view',
          name: '1-4',
          url: 'http://www.baidu.com'
        },{
          type: 'view',
          name: '1-5',
          url: 'http://www.baidu.com'
        }]
      }, {
        name: '2',
        sub_button: [{
          type: 'view',
          name: '2-1',
          url: 'http://www.soso.com/'
        },{
          type: 'view',
          name: '2-2',
          url: 'http://www.soso.com/'
        },{
          type: 'view',
          name: '2-3',
          url: 'http://www.soso.com/'
        },{
          type: 'view',
          name: '2-4',
          url: 'http://www.soso.com/'
        },{
          type: 'view',
          name: '2-5',
          url: 'http://www.soso.com/'
        }]
      }, {
        name: '3',
        sub_button: [{
          type: 'view',
          name: '3-1',
          url: 'http://www.163.com/'
        },{
          type: 'view',
          name: '3-2',
          url: 'http://www.163.com/'
        },{
          type: 'view',
          name: '3-3',
          url: 'http://www.163.com/'
        },{
          type: 'view',
          name: '3-4',
          url: 'http://www.163.com/'
        },{
          type: 'view',
          name: '3-5',
          url: 'http://www.163.com/'
        }]
      }]
   }
}

module.exports = config

module.exports = data => `<xml>
          <ToUserName>
            <![CDATA[${data.FromUserName}]]>
          </ToUserName>
          <FromUserName>
            <![CDATA[${data.ToUserName}]]>
          </FromUserName>
          <CreateTime>
            ${new Date().getTime()}
          </CreateTime>
          <MsgType>
            <![CDATA[${data.MsgType === 'event' ? 'text' : data.Content instanceof Array ?  'news' : data.MsgType}]]>
          </MsgType>
          ${data.Content instanceof Array ?  `<Articles>${data.Content.map(content => {
            return `
              <item>
                <Title><![CDATA[${content.Title}]]></Title>
                <Description><![CDATA[${content.Description}]]></Description>
                <PicUrl><![CDATA[${content.PicUrl}]]></PicUrl>
                <Url><![CDATA[${content.Url}]]></Url>
              </item>
            `
          }).join('')}</Articles><ArticleCount>${data.Content.length}</ArticleCount>` : `<Content>
            <![CDATA[${data.Content}]]>
          </Content>`}
        </xml>`;

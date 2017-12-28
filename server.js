const server = require('server')
const { get } = server.router
const { render } = server.reply
const config = {
  port: 8080,
  views: './',
  public: './',
}

server(config, [
    get('/', ctx => render('index.html')),
  ]
)

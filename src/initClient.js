const io = require('socket.io-client')

const config = require('./data/config.json')

module.exports = function () {
  const conn = io.connect(config.ip + ':' + config.port, { connectionTimeout: 3000, query: { username: config.username } })

  return conn
}

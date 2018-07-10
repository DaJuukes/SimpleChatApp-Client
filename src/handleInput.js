const config = require('./data/config.json')

module.exports = function (socket, text) {
  if (text.startsWith(config.commandPrefix)) {
    const args = text.slice(config.commandPrefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()

    switch (command) {
      case 'leaveroom':

        break
      case 'adduser':

        break
      default:
        console.log('Invalid command.')
    }
  } else {
    // TODO add room support
    return socket.emit('message', { message: text })
  }
}

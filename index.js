const initClient = require('./src/initClient.js')
const handleInput = require('./src/handleInput.js')
const readline = require('readline')

const socket = initClient()

socket.on('connect_error', () => {
  console.log('Socket connection failed. Exiting...')
  process.exit(0)
})

socket.on('connect', () => {
  console.log('Connected successfully! Joined default roon.')
})

socket.on('disconnect', () => {
  console.log('Forcibly disconnected. Check your username and make sure it is unique')
  process.exit(0)
})

socket.on('other_message', (msg) => {
  console.log(msg.message)
})

socket.on('chat_message', (msg) => {
  console.log(msg.username + ': ' + msg.message)
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', (line) => handleInput(socket, line))

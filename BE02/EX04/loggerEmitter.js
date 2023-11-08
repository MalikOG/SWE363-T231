const EventEmitter = require('events')
class LoggingEmitter extends EventEmitter {}

const loggingEmitter = new LoggingEmitter()


loggingEmitter.on('userLoggedIn', (username) => {
    const timeStamp=Math.round((Math.random() * (2 - 0.1) + 0.1)*100)/100
    console.log(`${timeStamp}s: ${username} logged in.`)
})

loggingEmitter.on('userLoggedOut', (username) => {
    const timeStamp=Math.round((Math.random() * (2 - 0.1) + 0.1)*100)/100
    console.log(`${timeStamp}s: ${username} logged out.`)
})

module.exports = loggingEmitter
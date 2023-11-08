const loggingEmitter = require('./loggerEmitter')
start=Date.now()/1000 // In seconds
console.log(start)
loggingEmitter.emit('userLoggedIn', "Abdulmalik")
loggingEmitter.emit('userLoggedIn', "Ahmed")
loggingEmitter.emit('userLoggedIn', "Abdullah")

loggingEmitter.emit('userLoggedOut', "Abdulmalik")
loggingEmitter.emit('userLoggedOut', "Ahmed")
loggingEmitter.emit('userLoggedOut', "Abdullah")
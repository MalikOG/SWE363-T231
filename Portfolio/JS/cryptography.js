const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt(name){
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
    let encrypted=cipher.update(name)
    encrypted=Buffer.concat([encrypted, cipher.final()])
    return {iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')}
}

function decrypt(name){
    let iv = Buffer.from(name.iv, 'hex')
    let encryptedName=Buffer.from(name.encryptedData, 'hex')
    let decipher=crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedName)
    decrypted=Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

var hw = encrypt('Abdulmalik Almadhi')
console.log(hw)
console.log(decrypt(hw))
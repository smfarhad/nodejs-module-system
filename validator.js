const validator = require('validator')
const getNotes = require('./notes')

const msg = getNotes()
const name = 'Andrew'
console.log(validator.isEmail('gmail.com'))
console.log(validator.isURL('gmail.com'))
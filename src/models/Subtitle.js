const BaseModel = require('./BaseModel')
const crypto = require('crypto')

class Subtitle extends BaseModel {

    async $beforeInsert() {
        this.subId = "SU" + crypto.randomBytes(5).toString('hex').toUpperCase()
    }
}

module.exports = Subtitle
const {login} = require('../controller')
const jwt = require('jsonwebtoken')
const jwktopem = require('jwk-to-pem')
const fs = require('fs')

module.exports = {
    tokenVerify = (req, res, next) => {
        let jwk = JSON.parse(fs.readFileSync('./jwk.json'))
        let pem = jwktopem(jwk)

        let token = req.get("authorization")
        token = token.slice(7)

        if(token){
            jwt.verify(token, pem, { algorithms: ['RS256']}, (err, decodedtoken) => {
                if(err){
                    res.send({
                        success: 0,
                        message: err
                    })
                }
                else{
                    next()
                }
            })
        }
        else{
            res.send({
                success: 0,
                message: "Access Denied! Unauthorized User"
            })
        }
    }
}

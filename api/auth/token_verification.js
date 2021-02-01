const {login} = require('../controller')
const jwt = require('jsonwebtoken')
const path = require('path')
const jwktopem = require('jwk-to-pem')
const fs = require('fs')

module.exports = {
    tokenVerify : (req, res, next) => {
        let jwk = JSON.parse(fs.readFileSync(path.join(__dirname,'jwk.json')))
        let pem = jwktopem(jwk.keys[1])

        let token = req.get("Authorization")
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


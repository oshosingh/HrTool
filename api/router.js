const router = require('express').Router()
const {login, signup, getProjectInfo, empCreate} = require('./controller')
const {tokenVerify} = require('../api/auth/token_verification')


router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    login(userName, password)
        .then(data => {
            let resp = {
                success: "1",
                payload_data: data.accessToken
            }
            res.send(resp)
        })
        .catch(err => {
            let resp = {
                success: "0",
                message: err
            }
            res.send(resp);
        })

}) 

router.post('/signup', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    signup(userName, password)
        .then(data => {
            const resp = {
                success: "1",
                payload: data
            }
            res.send(resp)
        })
        .catch(err => {
            const resp = {
                success: "0",
                message: err
            }
            res.send(resp)
        });

})

router.get('/project', tokenVerify, getProjectInfo)
router.post('/empcreate', tokenVerify, empCreate)

module.exports = router;
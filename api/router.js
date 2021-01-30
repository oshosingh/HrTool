const router = require('express').Router()
const {login, signup} = require('./controller')


router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    login(userName, password)
        .then(data => {
            let resp = {
                success: "1",
                payload: data
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

module.exports = router;
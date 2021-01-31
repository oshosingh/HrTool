const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const {Pool, getProjects} = require('./service')

module.exports = {
    login: async (userName, password) => {
        const userPool = Pool()
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: userName,
            Pool: userPool
        });
    
        const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: userName,
            Password: password
        });
    
        let promise = new Promise((resolve, reject) => {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: data => {
                    resolve(data)
                },
                onFailure: err => {
                    reject(err)
                },
                newPasswordRequired: data => {
                    resolve(data)
                }
            })
        });
    
        let result = await promise;
        return result;
    },

    signup: async (userName, password) => {
        const userPool = Pool();

        let promise = new Promise((resolve, reject) => {
            userPool.signUp(userName, password, [], null, (err, data) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            })
        })

        let result = await promise;
        return result;
    },

    getProjectInfo: (req, res) => {
        getProjects((err, results) => {
            if(err){
                console.log(err)
                ReadableStreamDefaultController;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    }
}
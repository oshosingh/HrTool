const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const {Pool, getProjects} = require('./service')
const AWS = require('aws-sdk')

const config = require('../config.json')

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
                    console.log(err)
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
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },

    empCreate: (req, res) => {
        const empId = req.body.empId
        const userName = req.body.userName
        const password = req.body.password

        AWS.config.update({
            'accessKeyId': config.AccessKeyId,
            'secretAccessKey': config.SecretAccessKey,
            'region' : 'us-east-1'
        })

        var empUserParams = {
            UserPoolId: config.PoolId,
            Username: userName,
            DesiredDeliveryMediums: [
                "EMAIL"
            ],
            TemporaryPassword: password
        }

        const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
        cognitoIdentityServiceProvider.adminCreateUser(empUserParams, (err, data) => {
            if(err){
                res.json({
                    success: 0,
                    message: err
                })
            }
            else{
                res.json({
                    success: 1,
                    payload: data
                })
            }
        })
    }
}
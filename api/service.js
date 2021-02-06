const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const db_pool = require('./database')
const AWS = require('aws-sdk')

module.exports = {
    Pool: () => {
        const poolData = {
            UserPoolId : 'us-east-1_79oBdO26m',
            ClientId: '63b3a0tl1svuvve9v5mo7s4u5a'
        }
    
        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        return userPool;
    },
    getProjects : callback => {
        db_pool.query(
            `select * from project_info`, [], (error, result, fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null, result);
            }
        )
    },
    getAllEmpInfo: callback => {
        db_pool.query(
            `select * from employee`, [], (err, result, fields) => {
                if(err){
                    return callback(err)
                }
                return callback(null, result)
            }
        )
    }
}
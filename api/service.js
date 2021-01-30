const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const db_pool = require('./database')

module.exports = {
    Pool: () => {
        const poolData = {
            UserPoolId : 'us-east-1_79oBdO26m',
            ClientId: '63b3a0tl1svuvve9v5mo7s4u5a'
        }
    
        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        return userPool;
    }
}
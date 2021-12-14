
const jwt = require('jsonwebtoken');

module.exports = {

    userLoginVerify: async function (input) {
        sails.log.info("@Services LoginService @method userLogin :: input");
        let verifyUser = await User.verifyUser(input);
        if (verifyUser.username == input.username && verifyUser.password == input.password) {
            let jwtToken = jwt.sign(
                { id:verifyUser.id,username:verifyUser.username,role:verifyUser.role},
                'jwttokenauthentication',
                { expiresIn: '1h' });
            return jwtToken;
        }
        else{
            throw {message:'check your username & password'}
        }
        
    },

    userRegistration: async function(input){
        sails.log.info("@Services UserService @method createJwtToken :: input",input);
        let createdUser = await User.createNewUser(input);
        return createdUser;

    }

}
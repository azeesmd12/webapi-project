

const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {

    if (req.headers.authorization) {
        let accesstoken = req.headers.authorization.split(' ')[1];
        let decoded = jwt.decode(accesstoken);
        try {
            let resultToken = jwt.verify(accesstoken,'jwttokenauthentication',{ algorithm:'RS256'});
            if(resultToken){
                if (decoded.role == 'user' || decoded.role == 'admin') {
                    next();
                }
            } 
            else{
                res.badRequest("Token is not valid")
            }
            }
            catch (err) {
            sails.log.error("@Policy isLoggedIn @Method verify @Message Error:", err);
            return res.badRequest(err);

        }
    }
    else{
        res.badRequest("token is not available ");
    }
}


        /*  try {
            let resultToken = jwt.verify(accesstoken,'Don\'t share this secret code',{ algorithm:'RS256'});
            sails.log.info('@Policy isLoggedIn @Method verify @Message',resultToken);
            if(resultToken)
            {
                next();
            }
            else{
                res.send("Token is not valid");
            }
         } catch (err) {
            sails.log.error("@Policy isUniversity @Method verify @Message Error:", err);
            return res.badRequest({message: "You are not authorized."});
             
         } 
     }else{
         res.badRequest("Access denied")
      */
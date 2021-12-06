/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


    userRegistration: async function(req,res){
        sails.log.info("@Controller UserController @method userRegistration :: req",req.body);
        try {
            let createdUser = await UserService.userRegistration(req.body);
            res.json(createdUser);
            
        } catch (error) {
            sails.log.info("@Controller UserController @method userRegistration :: Error",error);
            res.badRequest(error);  
        }
       
    },
    userLoginVerify : async function(req,res){
        sails.log.info("@Controller LoginController @method userLoginVerify :: req",);
        try {
            let token = await UserService.userLoginVerify(req.body)
            console.log(token);
            res.json({'token':token});
            
        } catch (error) {
            sails.log.info("@Controller UserController @method userLoginVerify :: Error",error);
            res.badRequest(error);
            
        }
        
    },

  

};


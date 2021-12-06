/**
 * LoanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    addCustomer: async function(req,res){
        sails.log.info("@Controller LoanController @method loanRequest :: req",req.body);
        try {
            let customerLoan = LoanService.addCustomer(req.body);
            res.json(customerLoan);
            
        } catch (error) {
            sails.log.info("@Controller LoanController @method loanRequest :: Error",error);
            res.badRequest(error);
            
        }
        
    },
    getAllCustomer : async function(req,res){
        sails.log.info("@Controller LoanController @method getAllCustomer :: req");
        try {
            let customer = await LoanService.getAllCustomer();
            res.json(customer);
            
        } catch (error) {
            sails.log.info("@Controller LoanController @method getAllCustomer :: Error",error);
            res.badRequest(error);
        }
        
        
    }
  

};


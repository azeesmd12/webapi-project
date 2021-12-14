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
    },
    getCustomerByuser : async function(req,res){
        sails.log.info("@Controller LoanController @method getCustomerByuser :: req",req.params);
        try {
            let customerDetails = await LoanService.getCustomerByuser(req.params);
            res.json(customerDetails);
        } catch (error) {
            sails.log.info("@Controller LoanController @method getCustomerByuser :: Error",error);
            res.badRequest(error);
        }
    },
    updateLoanStatus: async function(req,res){
        sails.log.info("@Controller LoanController @method updateLoanStatus :: req",req.params,req.body);
        try {
            let updateStatus = await LoanService.updateLoanStatus(req)
            console.log("success");
            res.json("Updated successfully");
        } catch (error) {
            sails.log.info("@Controller LoanController @method updateLoanStatus :: Error",error);
            res.badRequest(error);
        }
    }
  

};


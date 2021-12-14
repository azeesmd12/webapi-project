/**
 * Loan.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName :'customer',
  fetchRecordsOnCreate: true,

  attributes: {

      first_name:{
        type: 'string',
        required: true
      },
      last_name:{
        type:'string',
        required: true
      },
      age:{
        type:'number',
        required:true
      },
      gender:{
        type:'string',
        required: true
      },
      salary:{
        type:'ref',
        required:true
      },
      balance:{
        type:'ref',
        required:true
      },
      loan_amount:{
        type:'ref',
        required:true
      },
      eligible_loan:{
        type:'ref',
        required:true
      },
      approved_loan:{
        type:'ref',
      },
      dispatched:{
        type:'ref',
      },
      status:{
          type:'string'
      },
      emp_id:{
        type:'ref'
      }


  },

  addCustomer : async function(input){
    sails.log.info("@model Loan @method addCustomer :: input", input);
    let customer = await Loan.create(input);
    return customer
  },
  getAllCustomer : async function(){
    sails.log.info("@model Loan @method getAllCustomer :: input");
    let customers = await Loan.find().sort('id asc');
    return customers;
  },
  getCustomerByuser: async function(input) {
    sails.log.info("@model Loan @method getCustomerByuser :: input",input);
    let customerDetails = await Loan.find({
      where:{emp_id:input.id}
    });
    return customerDetails;
  },
  findCustomer: async function(input) {
    sails.log.info("@model Loan @method findEligibleLoanAmt :: input",input);
    return await Loan.findOne(input);
  },
  updateStatus:async function(input){
    sails.log.info("@model Loan @method getAllCustomer :: input");
    try {
      return await Loan.update(input.params.id).set(input.body);
    } catch (error) {
        throw {message:"Approved Loan is not greater than Eligible Loan"}
    }
    
  }

};


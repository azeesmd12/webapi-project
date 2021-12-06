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
      eligible_loan:{
        type:'ref',
        required:true
      },
      status:{
          type:'string'
      }


  },

  addCustomer : async function(input){
    sails.log.info("@model Loan @method addCustomer :: input", input);
    let customer = await Loan.create(input);
    return customer
  },
  getAllCustomer : async function(){
    sails.log.info("@model Loan @method getAllCustomer :: input");
    let customers = await Loan.find();
    return customers;
  }

};

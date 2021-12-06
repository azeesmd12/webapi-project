/**
 * Login.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {

  tableName:'user_register',
  fetchRecordsOnCreate: true,

  attributes: {
    username:{
      type:'string',
      required:true
    },
    email:{
      type:'string',
      required:true,
      unique : true
    },
    password:{
      type: 'string',
      required: true
    },
    role:{
      type:'string',
    }
  },

  createNewUser : async function(input){
    sails.log.info("@model User @method createNewUser :: input",input);
    return await User.create(input);
  },
  verifyUser : async function(input){
    sails.log.info("@model User @method verifyUser :: input",input);
    let where = {username:input.username,password:input.password}
    let result = await User.findOne({
      where,
      select:['username','password','role','email']
    });
    if(result)
      return result;
    else
      throw {message:'check your username and password'}  
  }

};


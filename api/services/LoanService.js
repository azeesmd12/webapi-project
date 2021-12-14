
module.exports = {

    addCustomer : async function(input){
        sails.log.info('@Services LoanService @method customerLoan :: input',input);
        //get 60% of salary from original salary and minus previous loan amount
        let balanceSalaryInMonths = (input.salary/100*60)-input.previousLoan;
        let eligibleLoanAmount = balanceSalaryInMonths * 5 ; // 5 is months
        input.age = Math.floor(input.age);
        input.balance = balanceSalaryInMonths;
        input.eligible_loan = eligibleLoanAmount;
        input.approved_loan = 0;
        input.dispatched = false;
        let customerLoan = await Loan.addCustomer(input);
        return customerLoan;
    },
    getAllCustomer: async function(){
        sails.log.info('@Services LoanService @method getAllCustomer :: input');
        let customers = await Loan.getAllCustomer();
        return customers;
    },
    getCustomerByuser:async function (input) {
        sails.log.info('@Services LoanService @method getCustomerByuser :: input',input);
        let customerDetails= await Loan.getCustomerByuser(input);
        return customerDetails;
    },
    updateLoanStatus:async function(input){
        sails.log.info('@Services LoanService @method updateLoanStatus :: input');
            let status = await Loan.updateStatus(input);
            return status;   
        
    }
}
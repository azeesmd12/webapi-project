


module.exports = {

    addCustomer : async function(input){
        sails.log.info('@Services LoanService @method customerLoan :: input',input);
        //get 60% of salary from original salary and minus previous loan amount
        let balanceSalaryInMonths = (input.salary/100*60)-input.previousLoan;
        let eligibleLoanAmount = balanceSalaryInMonths * 5 ; // 5 is months
        input.balance = balanceSalaryInMonths;
        input.eligible_loan = eligibleLoanAmount;
        let customerLoan = await Loan.addCustomer(input);
        return customerLoan;
    },
    getAllCustomer: async function(){
        sails.log.info('@Services LoanService @method getAllCustomer :: input');
        let customers = await Loan.getAllCustomer();
        return customers;
    }
}
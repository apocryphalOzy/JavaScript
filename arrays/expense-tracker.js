//expense object within expenses array. description property 'string' and amount which will be a number
//create two methods, functions as object properties on account object
  //first method will be 'addExpense' -> this will take 2 arguments. description, expense. This will populate expenses array with the properties/objects
  //second will be 'getAccountSummary' -> this method will total up all expenses and print `${name} has ${expenses} in expenses`


const account = {
    name: 'Jeremy',
    expenses: [],
    income: [],
    //create method
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    //create method
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    //create method
    getAccountSummary: function () {
        let totalExpenses = 0
        
        this.expenses.forEach(function(expense){
           
            totalExpenses = totalExpenses + expense.amount
        })

        let totalIncome = 0

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        let balance = 0
        balance = totalIncome - totalExpenses 

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses. `
    }


}



//calls to make
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
//console.log(account)
console.log(account.getAccountSummary())
let myAccount = {
    name: 'Jeremy',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)

// Challenge area
// create three new functions - addIncome, resetAccount, getAccountSummary for myAccount object
//addIncome should add more income to account
//resetAccount should reset poperty value to 0
//getAccountSummary should return all properties of account
  //output: Account for `name` has `amount`. `income amount` in income. `expense amount` in expenses

let addIncome = function (accountName, incomeAmount) {
    accountName.income = accountName.income + incomeAmount;
}

addIncome(myAccount, 12)
console.log(myAccount)

let resetAccount = function (accountName, reset = 0) {
    accountName.expenses = reset;
    accountName.income = reset;
    
}

let getAccountSummary = function (accountName) {
    let accountTotal = accountName.income - accountName.expenses;
    return `Account for ${accountName.name} has $${accountTotal}. $${accountName.income} in income. $${accountName.expenses} in expenses. `

}

console.log(getAccountSummary(myAccount));

resetAccount(myAccount)

console.log(getAccountSummary(myAccount))
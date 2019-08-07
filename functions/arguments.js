// Mutliple Arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = '4CHAN HAx0R', score = 0) {
    return `Name: ${name} - Score: ${score}`
   // return 'name: ' + name + ' - score: ' + score
    
}

let score = getScoreText(undefined, 69)
console.log(score)

// Challenge area - Tip Calculator
// a 25% tip on $40 would be $10
let getTip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on a ${total} dollar meal comes out to a ${tip} dollars`
}

let tipAmount = getTip(40, .25)
console.log(tipAmount)


// Template Strings
let name = 'Jeremy';
let age = '24';

console.log(`Hello errybody my name is ${name}! I am ${age} moons old.`)
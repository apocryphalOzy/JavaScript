// google mdn math for more info
let num =  103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//random number generator









//challenge area

// guessing game function that takes numbers 1-5 and returns true if random number is true or false otherwise

let makeGuess = function(number) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNum === number){
        return `Wow the number ${number} you selected matched with our random number generator of ${randomNum}!`
    
    } else if (randomNum !== number) {
        return `Haha your number ${number} dind't match our number of ${randomNum} fag`
    } else {
        return `The number you entered is not between 1 and 5`
    }
}

console.log(makeGuess(5))
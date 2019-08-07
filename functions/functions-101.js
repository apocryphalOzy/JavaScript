// Function - input(argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome User')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area

//convert fahrenheit to celsius
//(32f -> 0) (68F - 20C)
//print values

let converter = function(f) {
    let temp = (f - 32) * 5/9;
    return temp;
}

let tempvalue = converter(32);
let tempvalue1 = converter(68);
console.log(tempvalue);
console.log(tempvalue1);
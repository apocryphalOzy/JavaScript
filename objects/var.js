//var not recommended for development, you can declare a new variable and the program wont pick up on it and accept new declared variable
//var is function scoped not block scoped

if (10===10){
    var firstName = 'Jeremy'
}

console.log('firstName') //this will print outside the function block, and can create later error and confusion in bigger programs

const setName = function () {
    var name = 'Anna'
}

setName()
console.log(fistName) //now the program will throw an error because var is within a function, but that is the only time it will throw an 
                     //error because its funtion scoped

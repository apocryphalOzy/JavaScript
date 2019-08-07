let name = '      Jeremy   '

//Length Property
console.log(name.length)

//Convert to uppercase
console.log(name.toUpperCase())

//Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

//Trim method
console.log(name.trim())


//Challenge area
//create function called 'isValidPassword'
//check to see if password is more than 8 characters and it doesn't contain the word password

let isValidPassword = function(password) {
    if (password.includes('password') || password.length <= 7) {
        console.log('What the fuck ya think you is doin usin "password" in yas password and/or making it less than 7 characters. It must be both ya cunt')
        return false
    } else {
        console.log('Good on ya for making a smaht passcode')
        return true
    }

    
}



console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^'))
console.log(isValidPassword('abdefghijkpasswordandpee'))
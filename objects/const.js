//const based variables can not be reassigned to a different value/object
//we use const and let for code readability
const person = {
    age: 24
}
person.age = 28

person = {} //this will break our program because we are trying to reassign our object to a const variable. We should use a let variable to reassign instead

console.log(person)
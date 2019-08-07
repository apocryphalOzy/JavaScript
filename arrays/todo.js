//CHallenge area
//Create an array with five todos 
// print the amount of todos you have to do
//print first and second to last items

//console.log(`You have ${todo.length} tasks to complete today`)

//console.log(`You should do ${todo[0]} first and then ${todo[todo.length - 2]}`)

//challenge area
//delete 3rd item
//add new item to end of list
//remove first item from the list

// todo.splice(2,1)
// todo.push('Eat cat food')
// todo.shift()

// //challenge area
// //use forEach method to print items of array. e.g.: 1. todo 2. todo 3. todo
// //if you have an array and you want to count in order, you should stick with the 'forEach' method
// todo.forEach(function (item, index) { 
//     const num = index + 1;
//     console.log(`${num}. ${item}`)
// })

//if there is not an array or you need to count in a different order, you can use the for loop statement
// for (let index = 0;  index < todo.length; index++) { 
//     console.log(`${index + 1}. ${todo[index]}`)
// }

//challenge area
// 1. convert array to array of objects with property values text: todo and completed: true or false (make some todo completed and some not completed)
// 2. create a function to remove a todo by its text value property, the function should look like: deleteToDo(todo, 'chess' ). make search case insensitive
      //use console.log(todo) to see what changed in array objects. dont need to return anything

//const todo = ['Lectures', 'Exercise', 'Eat', 'Socialize Tonight', 'Chess']
//myprogram
// const deleteToDo = function (todo, toDoTitle) {
//     return todos = todo.find (function (property, index){
//         if (property.text.toLowerCase() === toDoTitle.toLowerCase()) {
//             return delete property.text && delete property.completed
//         }
//     })
// }


const todo = [ {
    text: 'Lectures',
    completed: true
},{
    text: 'Exercise',
    completed: false
},{
    text: 'Eat',
    completed: true
},{
    text: 'Socialize Tonight',
    completed: true
},{
    text: 'Chess',
    completed: false
}]

//lecture program
const deleteToDo = function (todo, toDoTitle) {
    //find item of array
    const index = todo.findIndex(function(todo) {
        return todo.text.toLowerCase() === toDoTitle.toLowerCase()
    })
    if (index > -1) {
        //using index position, removes 1 element
        todo.splice(index, 1)
    }
}


// deleteToDo(todo, 'chess')
// console.log(todo)

//challenge area
//create function that show todos that have yet to be completed. so it returns objects with false boolean

const getThingsToDo = function(todo) {
    return todo.filter(function(todos, index) {
        const isTitleMatch = todos.completed === false
        return isTitleMatch
    })
}

//console.log(getThingsToDo(todo))


//challenge area
//create function that sorts todos by completion. put false as first then true

const sortToDos = function(todo) {
    todo.sort(function(a,b){
        return a.completed - b.completed
    })
}


sortToDos(todo)
console.log(todo)


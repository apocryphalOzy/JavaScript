//array
const notes = [{
    title: 'Yo momma house',
    body: 'she makin beans nikka'
}, {
    title: 'Computer Science',
    body: 'its like number n shit'
}, {
    title: 'Music Monday',
    body: 'Wamma know more about music? TOO BAD!'
}] 

const sortNotes = function(notes) {
    notes.sort(function(a,b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

//find() method is good for looking for items directly in an array
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    
}

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


//console.log(findNotes(notes, 'kk'))

//findIndex method is good for removing items/replacing, etc. items by their index
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'Computer Science')
// console.log(note)
/* notes.pop() //.pop() method removes item from end of list  
notes.push('My new note') //.push() method adds item to end of list

notes.shift() //removes the very first item from array
notes.unshift('my first note') //adds item to first array index position

notes.splice(1, 0, 'This is the new second item') */ //method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// notes[2] = 'this is now the new note 3';

// notes.forEach(function (item, index){
//     console.log(index)
//     console.log(item)
// })


//console.log(notes.length)
//console.log(notes[notes.length - 2])

 // FOR LOOP

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

//console.log(notes.indexOf('Note 2')) //returns the index value from array

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex( function (note, index) {
//     return note.title === 'Computer Science'
// })

// console.log(index)


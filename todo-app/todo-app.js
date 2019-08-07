//DOM

const ps = document.querySelectorAll('p')
const todo = getSavedTodos()

//contains whatever is searched/rendered from our function 
const filters = {
    searchText: '',
    hideCompleted: false
}


renderToDos(todo, filters)


//Listen for todo text change   
document.querySelector('#search-text').addEventListener('input' , function (e){
    filters.searchText = e.target.value
    renderToDos(todo, filters)
    
})

document.querySelector('#todo-form').addEventListener('submit', function (e){
    e.preventDefault()
    todo.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todo)
    renderToDos(todo, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked;
    renderToDos(todo, filters);

    
})


        
        
    
    
    
    




















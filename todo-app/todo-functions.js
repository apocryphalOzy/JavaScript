//Fetch existing todos from localStorage
// getSavedTodos
const getSavedTodos = function(){
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    }else{
        return []
    }
}

//save todos to localStorage
// saveTodos
const saveTodos = function(todo){
    return localStorage.setItem('todo', JSON.stringify(todo))
}

//Render applicationtodos based on filters
//renderTodos
const renderToDos = function(toDoList, filters){
    let filteredToDos = toDoList.filter(function(todo){ 
        
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) 
    })
    
    filteredToDos = filteredToDos.filter(function (todo){
        
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }

    })
    
    const incompleteToDo = filteredToDos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#filtered-todos').innerHTML = ''
    document.querySelector('#filtered-todos').appendChild(generateSummaryDOM(incompleteToDo))

    filteredToDos.forEach(function(element){
        document.querySelector('#filtered-todos').appendChild(generateTodoDOM(element))
    })
    

}

// Remove todo from list
const removeTodo = function(id){
    const todoIndex = todo.findIndex(function(todo){
        return todo.id === id
    }) 

    if (todoIndex > -1){
        todo.splice(todoIndex, 1)
    }
}

//Get the DOM elements for an individual note
//generateTodoDOM
const generateTodoDOM = function(todos){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todos.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function(){
        todos.completed = checkbox.checked
        saveTodos(todo)
        renderToDos(todo, filters)

    })

    // Setup the todo text
    todoEl.appendChild(todoText)

    // Setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        removeTodo(todos.id)
        saveTodos(todo)
        renderToDos(todo, filters)
    })


    if (todos.text.length > 0) {
        todoText.textContent = todos.text
    }else{
        todoText.textContent = "Unnamed Todo"
    }

    todoEl.appendChild(checkbox)
    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)


    return todoEl
}

//Get the DOM elements for list summary
//generateSummaryDOM
const generateSummaryDOM = function(incompleteToDo){
    const summary = document.createElement('h2')
    summary.textContent = `Hey you have ${incompleteToDo.length} todos left.`
    return summary
}


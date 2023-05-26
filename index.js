// javascript
const addTodoInputEl = document.getElementById("add-todo-input")
const addBtn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")
const tagBtn = document.getElementById("tag-btn")
const errorMessage = document.getElementById("error-message")
let entryCount = 0;
let entries = []

renderEntry()

if (entries.length <= 0) {
    todoList.innerHTML = `
    <img src="notes.png" id="notes-img">
    <p id="notes-text">Oops! It seems your to-do list is on vacation. <br> Time to give it some tasks!</p>`
    console.log("image initialized")
}

addBtn.addEventListener("click", function() {
    if (addTodoInputEl.value.length >= 1) {
    entries.push(addTodoInputEl.value)
    localStorage.setItem("entries", JSON.stringify(entries))
    console.log(entries)
    renderEntry()
    addTodoInputEl.value = ""
    } else {
        errorMessage.textContent = "Input value required."
    }
})

function renderEntry() {
    entries = JSON.parse(localStorage.getItem("entries"))
    todoList.innerHTML = ""
    for (let i = 0; i < entries.length; i++){
        todoList.innerHTML += `
            <div class="todo-entry" id="entry-${entryCount}">
                <p id="entry-text">${entries[i]}</p>
                <div id="entry-btn-div">
                    <button id="edit-entry" class="entry-btn"><i class="fa-solid fa-edit"></i></button>
                    <button id="delete-entry" class="entry-btn" onclick="deleteEntry(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `
    }
    if (entries.length <= 0) {
        todoList.innerHTML = `
        <img src="notes.png" id="notes-img">
        <p id="notes-text">Oops! It seems your to-do list is on vacation. <br> Time to give it some tasks!</p>`
        console.log("image initialized")
    }   
    localStorage.setItem("entries", JSON.stringify(entries))
}
// edit-btn is non-functional. cannot find solution, too hard

function deleteEntry(item) {
    entries.splice(item, 1)
    localStorage.setItem("entries", JSON.stringify(entries))
    renderEntry()
}

tagBtn.addEventListener("click", function() {
    errorMessage.textContent = "The ability to add tags (with corresponding name and color) will be added soon!"
})
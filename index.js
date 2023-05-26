// javascript
const addTodoInputEl = document.getElementById("add-todo-input")
const addBtn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")
const tagBtn = document.getElementById("tag-btn")
const errorMessage = document.getElementById("error-message")
const quotesText = document.getElementById("quotes-text")
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
    errorMessage.textContent = ""
    entries = JSON.parse(localStorage.getItem("entries"))
    todoList.innerHTML = ""
    for (let i = 0; i < entries.length; i++){
        todoList.innerHTML += `
            <div class="todo-entry" id="entry-${entryCount}">
                <p id="entry-text">${entries[i]}</p>
                <div id="entry-btn-div">
                    <button id="edit-entry" class="entry-btn" onclick="editEntry()"><i class="fa-solid fa-edit"></i></button>
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

function editEntry() {
    errorMessage.textContent = "The ability to edit the name of the entries will be added soon!"
}

const quotes = [
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"In the middle of every difficulty lies opportunity." - Albert Einstein',
  '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
  '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
  '"The best way to predict the future is to create it." - Peter Drucker',
  '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
  '"You have to expect things of yourself before you can do them." - Michael Jordan',
  '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
  '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau',
  '"The greatest discovery of all time is that a person can change their future by merely changing their attitude." - Oprah Winfrey',
  '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
  '"The harder I work, the luckier I get." - Gary Player',
  '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
  '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
  '"The only true wisdom is in knowing you know nothing." - Socrates',
  '"It does not matter how slowly you go, as long as you do not stop." - Confucius',
  '"It always seems impossible until it\'s done." - Nelson Mandela',
  '"Believe in yourself, take on your challenges, and dig deep within yourself to conquer fears. Never let anyone bring you down. You got this." - Chantal Sutherland',
  '"The best revenge is massive success." - Frank Sinatra',
  '"If you want to achieve greatness, stop asking for permission." - Anonymous',
  '"Dream big and dare to fail." - Norman Vaughan',
  '"Success is walking from failure to failure with no loss of enthusiasm." - Winston Churchill',
  '"Your time is limited, don\'t waste it living someone else\'s life." - Steve Jobs',
  '"Life is what happens when you\'re busy making other plans." - John Lennon',
  '"Strive not to be a success, but rather to be of value." - Albert Einstein',
  '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
  '"In three words I can sum up everything I\'ve learned about life: it goes on." - Robert Frost',
  '"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb',
  '"I have not failed. I\'ve just found 10,000 ways that won\'t work." - Thomas Edison',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"In order to be irreplaceable one must always be different." - Coco Chanel',
  '"It is during our darkest moments that we must focus to see the light." - Aristotle',
  '"The true sign of intelligence is not knowledge but imagination." - Albert Einstein',
  // Add more quotes here...
];

quotesText.textContent = quotes[Math.floor(Math.random() * quotes.length - 1)]

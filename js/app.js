
// Select the elements
const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

// Classes names 
const CHECK = "fa-check-circle" 
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough" 

//Variables
let LIST, id

// Get item from local storage
let data = localStorage.getItem("TODO")


// Check if data is not empty
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length // set id to the last item in the list
    loadList(LIST) //load list to the user interface
} else { // if data is empty
    LIST = []
    id = 0
}

// Load items to the user's interface
function loadList(array) {
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash)
    })   
}

// Clear data from local storage
clear.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})

// Show todays date
const options = {
                    weekday : "long",
                    month : "short",
                    day : "numeric"
                }
const today = new Date();
dateElement.textContent = today.toLocaleDateString("en-US", options)

// Add to do function
function addToDo(toDo, id, done, trash) {
    if(trash) {return}

    const DONE = done ? CHECK : UNCHECK
    const LINE = done ? LINE_THROUGH : ""

    const position = "beforeend"
    const item =`
                    <li class="item">
                        <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                    </li>
                `
    list.insertAdjacentHTML(position, item)
}

// Add an item to the list when user presses the RETURN KEY
document.addEventListener("keyup", function(event){
    if (event.keyCode == 13) {
        const toDO = input.value
        
        // check if input is empty
        if (toDO) {
            addToDo(toDO)

            LIST.push({
                name : toDO,
                id : id,
                done : false,
                trash : false
            })

            // Add item to local storage
            localStorage.setItem("TODO", JSON.stringify(LIST))

            id++
        } 
        input.value = ""
    } 
})

// Complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    LIST[element.id].done = LIST[element.id].done ? false : true
}

// Remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)

    LIST[element.id].trash = true
}

// Target items created dynamically
list.addEventListener("click", function(event) {
    const element = event.target // return clicked element inside our list
    const elementJob = element.attributes.job.value // complete or delete
    if (elementJob == "complete") {
        completeToDo(element)
    } else if (elementJob == "delete"){
        removeToDo(element)
    }

    // Add item to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST))
})


/** Nav Operations */

// Classes names 
const HIDE = "hide" 
const SHOW = "show"

// Hide and show menu contents
const navList = document.getElementById("nav-list")

navList.addEventListener("click", function(event) {
    const element = event.target // return clicked element inside our list
    const elementJob = element.attributes.job.value // complete or delete
    const item = navList.getElementsByTagName("i")

    //initializing classes of items
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        element.classList = ""
    }
    
    hideContent()
    
    if (elementJob == "select") {
        selectMenu(element)
    }

})

function selectMenu(element) {
    element.classList.toggle("selected")
    const elementID = element.attributes.id.value
    const newID = elementID + "Content"
   
    document.getElementById(newID).classList = "side"   
}

function hideContent() {
    const array = document.getElementsByClassName("side")

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.classList = "hide"
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





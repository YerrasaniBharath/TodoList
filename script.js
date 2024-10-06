let todoItemsContainerElement = document.getElementById('todoItemsContainer'); //getting unordered id 

let i = 1;

//var audio = new Audio('https://res.cloudinary.com/dmt2nhkmk/video/upload/v1728190830/VINE_BOOM_SOUND_Sound_Effects_Download_-_MobCup.Com.Co_mst9i3.mp3');


function onDeleteTodo(todoId) {
    let todoIdElement = document.getElementById(todoId);
    //audio.play();
    todoItemsContainerElement.removeChild(todoIdElement);
}

function addTodoItem() {

    let todoUserInputElement = document.getElementById('todoUserInput').value;
    let inputResultElement = document.getElementById('inputResult');
    let todoId = "todo" + i;

    if (document.getElementById('todoUserInput').value === "") {
        inputResultElement.textContent = "Please Enter a Valid text";
        inputResultElement.style.color = "red";

    } else {
        inputResultElement.textContent = "";


        let liElement = document.createElement('li'); // creating list Element
        liElement.id = todoId;
        liElement.classList.add('todo-item-container', 'd-flex', 'flex-row'); // adding list styles
        todoItemsContainerElement.appendChild(liElement); // child of todoItemsContainerElement


        let inputElement = document.createElement('input'); // creating input Element 
        inputElement.classList.add('checkbox-input'); // adding input styles
        inputElement.type = "checkbox";
        inputElement.id = "checkboxInput" + i;
        liElement.appendChild(inputElement);


        let divElement = document.createElement('div'); //create a div element
        divElement.classList.add('label-container', 'd-flex', 'flex-row'); // add div element styles
        divElement.onclick = function() {
            labelElement.classList.toggle('checked');
        }
        liElement.appendChild(divElement);

        let labelElement = document.createElement('label'); //creating a label Element
        labelElement.classList.add('checkbox-label'); // adding label styles
        labelElement.htmlFor = "checkboxInput" + i;
        labelElement.textContent = todoUserInputElement;
        divElement.appendChild(labelElement);

        let deleteIconContainer = document.createElement('div');
        deleteIconContainer.classList.add('delete-icon-container');
        divElement.appendChild(deleteIconContainer);

        let icon = document.createElement('i');
        icon.classList.add("delete-icon", 'far', 'fa-trash-alt');
        icon.onclick = function() {
            onDeleteTodo(todoId);
        }
        deleteIconContainer.appendChild(icon);


        document.getElementById('todoUserInput').value = "";

        i++;
    }

    //document.getElementById('todoUserInput').value = "";
}
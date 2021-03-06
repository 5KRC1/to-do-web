let input = document.getElementById('input1');
let array = [];

window.onload = function(){
    if(localStorage.getItem('Tasks') != null){
        array = JSON.parse(localStorage.getItem('Tasks'));
        displayTasks();
    }
}

function usrInput(){
    if(input.value.trim() != ""){
        array.push(input.value.trim());
        //localStorage.setItem('Tasks', JSON.stringify(array));
        localStorage.setItem('Tasks', JSON.stringify(array));
        displayTasks();
    }

    input.value="";
}


function displayTasks(){
    let container = document.querySelector(".tasks");
    container.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        container.innerHTML += `
            <div class="task${i} task">
                <h1>${array[i]}</h1>
                <ion-icon name="close-circle" onclick="array.splice(${i}, 1); localStorage.setItem('Tasks', JSON.stringify(array)); location.reload();"></ion-icon>
                <ion-icon name="checkmark-circle-outline" class="check" onclick="check(${i});"></ion-icon>
            </div>
        `
    }
}

function check(e){
    let todo = document.querySelector(".task" + e);
    todo.classList.toggle("completed");
}
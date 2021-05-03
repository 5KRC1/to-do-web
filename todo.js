let array = [];
let input = document.getElementById('input1');

window.onload = function(){
    if(localStorage.getItem('Tasks') != null){
        array = JSON.parse(localStorage.getItem('Tasks'));
        display();
    }
}
function usrInput(){
   
   if(input.value != ""){
       array.push(input.value);
   }
   display();
   input.value = "";
}

input.addEventListener('keydown', function (e){
    if (e.keyCode === 13){
        usrInput();
    }
})

function display(){
    let tasks = document.querySelector('.tasks');
    tasks.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        tasks.innerHTML += `
        <div class="task a${i}">
            <h1>${array[i]}</h1>
            <div class="buttons">
                <ion-icon name="checkmark" class="check" onclick="done(${i});"></ion-icon>
                <ion-icon name="close" class="close"onclick="deleted(${i});"></ion-icon>
            </div>
        </div>
        `
    }
    localStorage.setItem('Tasks', JSON.stringify(array));
}

function done(e){
    let todo = document.querySelector('.a' + e);
    todo.classList.toggle('completed');
}

function deleted(e){
    array.splice(e, 1);
    localStorage.setItem('Tasks', JSON.stringify(array));
    location.reload();
}

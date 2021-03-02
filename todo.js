
function usrInput(){
    let input = document.getElementById("input1").value;
    let container = document.querySelector(".tasks");

    container.innerHTML +=`
        <div class="task">
            <p>${input}</p>
            <ion-icon name="close-circle" onclick="console.log('yo')">
        </div>
    `
}
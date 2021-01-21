let easy_button = document.getElementById("easyButton");
let hard_button = document.getElementById("hardButton");
let toggle = document.getElementsByClassName("easy");
function easy(){
  for(let l of toggle){
    console.log(l);
    l.style.display = "none";
  }
}

function hard(){
for(let l of toggle){
  console.log(l);
  l.style.display = "";
}
}

easy_button.addEventListener("click",easy);
hard_button.addEventListener("click",hard);

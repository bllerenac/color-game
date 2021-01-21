let easy_button = document.getElementById("easyButton");
let hard_button = document.getElementById("hardButton");
let toggle = document.getElementsByClassName("easy");
function easy(){
  for(let l of toggle){
    console.log(l);
    l.style.display = "none";
  }

  initialSquares = 3;
  colorList = generateListOfColors(initialSquares)
  correctColor = selectColor(colorList)

  Game();
}


function hard(){
  for(let l of toggle){
    console.log(l);
    l.style.display = "";
  }

  initialSquares = 6;
  colorList = generateListOfColors(initialSquares)
  correctColor = selectColor(colorList)

  Game();
}

easy_button.addEventListener("click",easy);
hard_button.addEventListener("click",hard);

let easy_button = document.getElementById("easyButton");
let hard_button = document.getElementById("hardButton");
let toggle = document.getElementsByClassName("easy");
function easy(){
  for(let l of toggle){
    console.log(l);
    l.style.display = "none";
  }

  let initialSquares = 3;
  colorList = generateListOfColors(initialSquares)
  correctColor = selectColor(colorList)

  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorList[i];
    squares[i].addEventListener("click", function() {
    let squareColor = squares[i].style.backgroundColor

        if(squareColor === correctColor) {
            // Win condition
            message.textContent = "Correct!";
      resetBtn.textContent = "Play Again?";
      changeColors(squareColor);
      h1.style.background = squareColor;
        } else {
            message.textContent = "Try again"
            squares[i].style.backgroundColor = "#232323"
            squares[i].style.borderColor = "#232323"
            // or
            // squares[i].style.display = "none"
        }
    })
  }
}

function hard(){
for(let l of toggle){
  console.log(l);
  l.style.display = "";
}

let initialSquares = 6;
  colorList = generateListOfColors(initialSquares)
  correctColor = selectColor(colorList)

  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorList[i];
    squares[i].addEventListener("click", function() {
    let squareColor = squares[i].style.backgroundColor

        if(squareColor === correctColor) {
            // Win condition
            message.textContent = "Correct!";
      resetBtn.textContent = "Play Again?";
      changeColors(squareColor);
      h1.style.background = squareColor;
        } else {
            message.textContent = "Try again"
            squares[i].style.backgroundColor = "#232323"
            squares[i].style.borderColor = "#232323"
            // or
            // squares[i].style.display = "none"
        }
    })
  }
}

easy_button.addEventListener("click",easy);
hard_button.addEventListener("click",hard);

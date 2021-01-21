let initialSquares = 6
let colorList = generateListOfColors(initialSquares)
let correctColor = selectColor(colorList)
let h1 = document.querySelector("h1");
let title = document.getElementById("colorCode")
let squares = document.querySelectorAll(".color_option")
let message = document.getElementById("message")
let resetBtn = document.getElementById("reset")
let easy_button = document.getElementById("easyButton");
let hard_button = document.getElementById("hardButton");
let toggle = document.getElementsByClassName("easy");

colorCode.textContent = correctColor;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorList[i];
    squares[i].addEventListener("click", function() {
    let squareColor = squares[i].style.backgroundColor

        if(squareColor === correctColor) {
            message.textContent = "Correct!";
			resetBtn.textContent = "Play Again?";
			changeColors(squareColor);
			h1.style.background = squareColor;
        } else {
            message.textContent = "Try again"
            squares[i].style.backgroundColor = "#232323"
            squares[i].style.borderColor = "#232323"
        }
    })
}

resetBtn.addEventListener("click", function(){
	colors = generateListOfColors(initialSquares);
	correctColor = selectColor(colors);
	title.textContent = correctColor;
	resetBtn.textContent = "New Colors";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "steelblue"; 
})

easy_button.addEventListener("click",easy);
hard_button.addEventListener("click",hard);

function changeColors(colorCorrect){
	for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colorCorrect;
        h1.style.background = colorCorrect
	}	
}

function selectColor(colorList) {
    let squareColor = Math.floor(Math.random() * colorList.length)
    return colorList[squareColor]
}

function generateListOfColors(squares) {
    let colors = []

    for(let i = 0; i < squares; i++) {
        colors.push(randomColor())
    }

    return colors
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)
    
        return "rgb(" + r + ", " + g + ", " + b + ")"
}

function easy(){
    for(let l of toggle){
      console.log(l);
      l.style.display = "none";
    }

    initialSquares = 3;

    newList = generateListOfColors(initialSquares)
    correctColor = selectColor(newList)

    colorCode.textContent = correctColor;
    h1.style.background = "steelblue"; 
    easy_button.style.background = "steelblue";
    easy_button.style.color = "white";
    hard_button.style.background = "white";
    hard_button.style.color = "steelblue";
  
    for(let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = newList[i];
      squares[i].addEventListener("click", function() {
      let squareColor = squares[i].style.backgroundColor
  
          if(squareColor === correctColor) {
              message.textContent = "Correct!";
              resetBtn.textContent = "Play Again?";
              changeColors(squareColor);
              h1.style.background = squareColor;
          } else {
              message.textContent = "Try again"
              squares[i].style.backgroundColor = "#232323"
              squares[i].style.borderColor = "#232323"
          }
      })
    }
}

  function hard(){
    for(let l of toggle){
      console.log(l);
      l.style.display = "";
    }

      initialSquares = 6;
      newList = generateListOfColors(initialSquares)
      correctColor = selectColor(newList)

      colorCode.textContent = correctColor;
      h1.style.background = "steelblue";
      hard_button.style.background = "steelblue";
      hard_button.style.color = "white";
      easy_button.style.background = "white";
      easy_button.style.color = "steelblue";

      for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = newList[i];
        squares[i].addEventListener("click", function() {
        let squareColor = squares[i].style.backgroundColor
    
            if(squareColor === correctColor) {
                message.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColors(squareColor);
                h1.style.background = squareColor;
            } else {
                message.textContent = "Try again"
                squares[i].style.backgroundColor = "#232323"
                squares[i].style.borderColor = "#232323"
            }
        })
      }
    }

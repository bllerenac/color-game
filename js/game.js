let initialSquares = 6
colorList = generateListOfColors(initialSquares)
correctColor = selectColor(colorList)
h1 = document.querySelector("h1");
title = document.getElementById("colorCode")
squares = document.querySelectorAll(".color_option")
message = document.getElementById("message")
resetBtn = document.getElementById("reset")

colorCode.textContent = correctColor;

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

resetBtn.addEventListener("click", function(){
	//generate all new colors
	colors = generateListOfColors(initialSquares);
	//pick a new random color from array
	correctColor = selectColor(colors);
	//change colorDisplay to match picked color
	title.textContent = correctColor;
	resetBtn.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//set winning color highlight back to default
	h1.style.background = "steelblue"; 
})

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


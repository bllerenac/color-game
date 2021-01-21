let initialSquares = 6
    colorList = generateListOfColors(initialSquares)
    correctColor = selectColor(colorList)
    title = document.getElementById("colorCode")
    squares = document.querySelectorAll(".color_option")
    message = document.getElementById("message")
    resetBtn = document.getElementById("reset")

title.textContent = correctColor

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorList[i];
    squares[i].addEventListener("click", function() {
        let squareColor = squares[i].style.backgroundColor
        if(squareColor == correctColor) {
            // Win condition
            resetBtn.textContent = "Play again?"
        } else {
            message.textContent = "Try again"
            squares[i].style.backgroundColor = "#232323"
            squares[i].style.borderColor = "#232323"
            // or
            // squares[i].style.display = "none"
        }
    })
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


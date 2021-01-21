let initialSquares = 6
    colorList = generateListOfColors(initialSquares)
    correctColor = selectColor(colorList)
    title = document.getElementById("colorDisplay")
    squares = document.querySelectorAll(".square")

title.textContent = correctColor

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorList[i];
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

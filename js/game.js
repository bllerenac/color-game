const Squares = document.querySelectorAll(".square")
let initialSquares = 6
    colorList = generateListOfColors(initialSquares)
    correctColor = selectColor(colorList)

for(let square of Squares) {
    square.style.backgroundColor = selectColor(colorList)
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

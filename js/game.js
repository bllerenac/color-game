const displayedSquares = document.querySelectorAll(".square")
let initialSquares = 6
    colorList = generateListOfColors(initialSquares)
    correctColor = pickWinningColor(colorList)




function pickWinningColor(colorList) {
    let winningColor = Math.floor(Math.random() * colorList.length)
    return colorList[winningColor]
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

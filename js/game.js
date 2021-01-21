let start_squares = 6
    color_list = generateListOfColors(start_squares)
    correct_color = pickWinningColor(color_list)

function pickWinningColor(color_list) {
    let winning_color = Math.floor(Math.random() * color_list.length)
    return color_list[winning_color]
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


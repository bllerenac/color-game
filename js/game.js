let start_squares = 6;

function listOfColors(squares) {
    let color_list = []

    for(let i = 0; i < squares; i++) {
        color_list.push(randomColor())
    }

    return color_list
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)
    
        return "rgb(" + r + ", " + g + ", " + b + ")"
}

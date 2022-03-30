// Create alert upon entry to window
window.alert("Wanna play rock paper scissors? Pick R, P, or S and prepare to win or lose in this game of random chance!")
// Create random generator function
function getRandomItem(arr) {
    // Establish array for AI to use
    var randomIndex = Math.floor(Math.random()*arr.length)
    // Create random picker
    var item = arr[randomIndex]
    // Returning random item
    return item;
}
// Create array
var array = ["r","p","s"]
// Displaying result
var result = getRandomItem(array)
// Create alerts for playing
let play=window.prompt("Choose R, P, or S!")

let userChoice = play.includes("R","P","S")

window.alert("I choose "+ result+"!")

// Display who wins
let winner;
if (play.toLowerCase === result) {
    window.alert("It's a tie!")
    winner = "Tie"
    console.log(winner)
} else if (play.toLowerCase=="r", result=="s") {
    window.alert("You win! :)")
    winner = "User"
    console.log(winner)
} else if (play.toLowerCase=="s", result=="p") {
    window.alert("You win! :)")
    winner = "User"
    console.log(winner)
} else if (play.toLowerCase=="p", result=="r") {
    window.alert("You win! :)")
    winner = "User"
    console.log(winner)
} else {
    window.alert("You lose! :(")
    winner = "Computer"
    console.log(winner)
}

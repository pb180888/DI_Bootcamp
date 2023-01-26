// Exercise 2 : Your Favorite Colors

// 1. Create an array called colors where the value is a list of your five favorite colors.
const colors = ["Green", "Black", "Red", "Blue", "Grey"]
const suffixes = ["1st", "2nd", "3rd", "4th", "5th"]
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (var i = 0; (i < colors.length) && (i < suffixes.length); i++) {
    console.log(`My ${suffixes[i]} choice is ${colors[i]}`)
}



// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

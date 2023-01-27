function playTheGame() {
    const userReady = confirm("Would you like to play game?");

    if (!userReady) return alert("No problem, Goodbye")

    const computerNumber = generateRandomNumber()
    let answ = prompt("Type a number")
    let numberOfTries = 0;

    while (Number(answ) != computerNumber) {
        numberOfTries = numberOfTries + 1;
        if (numberOfTries === 3) return alert("Too many tries. The number was: " + computerNumber)
        if (!IsonlyNumber(answ)) return alert("Sorry Not a number, Goodbye")
        if (!inthemiddleZeroAndTen(Number(answ))) return alert("Sorry it’s not a good number, Goodbye")

        console.log(Number(answ), computerNumber)

        if (Number(answ) > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again")
        }
        if (Number(answ) < computerNumber) {
            alert("Your number is smaller then the computer’s, guess again")
        }
        answ = prompt("Type another number")
    }

    alert("Winner ! the number was indeed " + computerNumber + " You found in " + (numberOfTries + 1) + " tries")
}



function IsonlyNumber(str) {
    const regex = new RegExp(/^[0-9]*$/);
    return regex.test(str);
}

function inthemiddleZeroAndTen(number) {
    return number >= 0 && number <= 10
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 10)
}


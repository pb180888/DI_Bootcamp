function playTheGame() {
    const userReady = confirm("Would you like to play game?");

    if (!userReady) {
        alert("No problem, Goodbye")
        return
    }

    const answ = prompt("Type a number")

    if (!IsonlyNumber(Number(answ))) {
        alert("Sorry Not a number, Goodbye")
        return
    }

    if (!inthemiddleZeroAndTen(answ)) {
        alert("Sorry it’s not a good number, Goodbye")
        return
    }

    const computerNumber = generateRandomNumber()
    console.log('Computer number:', computerNumber)

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
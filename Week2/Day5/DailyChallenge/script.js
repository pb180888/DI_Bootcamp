let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput() {
    let answ = prompt("How many beers?")
    if (answ == "") return alert("Please type something");
    const number = Number(answ);
    if (Number.isNaN(number)) return alert("Please type a number");
    return number;
}

while (numberOfBeers > 0) {
    const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
    console.log(stanza);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway++;
}

function makeStanza(num, counter) {
    const bottleOrBottles = getBottleOrBottles(num);
    const bottlesToTakeAway = getSmallerNumber(counter, num);
    const remainingBottles = getBiggerNumber(num - counter, 0);

    const stanza = `${num} ${bottleOrBottles} of beer on the wall 
    ${num} ${bottleOrBottles} of beer 
    Take ${bottlesToTakeAway} down, pass it around 
    ${remainingBottles} ${getBottleOrBottles(remainingBottles)} of beer on 
    the wall`;

    return stanza;
}

function getBiggerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function getSmallerNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }

}

function isPlural(num) {
    return num > 1;
}

function getBottleOrBottles(num) {
    if (isPlural(num)) {
        return "bottles";
    } else {
        return "bottle";
    }
}

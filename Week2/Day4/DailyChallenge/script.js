let userAnswer = prompt("Please give us several world");
const myArray = userAnswer.split(" ");

function searchlongest() {
    let longest = 0;
    for (let word of myArray) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

function addstarsTopBottom() {
    const longestnum = searchlongest();
    console.log("*".repeat(longestnum + 5));
}

function addwords() {
    const longestnum = searchlongest();
    for (let i = 0; i < myArray.length; i++) {
        console.log(`* ${myArray[i]} ${" ".repeat(longestnum - myArray[i].length)} *`);
    }
}

addstarsTopBottom()
addwords()
addstarsTopBottom()
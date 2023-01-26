var grade = Number(prompt("What's your grade?"));
if (grade > 90) {
    console.log("A")
} else if ((grade === 90) || (grade > 80)) {
    console.log("B")
} else if ((grade === 70) || (grade > 70) || (grade === 80)) {
    console.log("C")
}
else if (grade < 70) {
    console.log("D")
};

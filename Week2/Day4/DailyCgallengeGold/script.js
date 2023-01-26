const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
const numbers1 = numbers.toString();
console.log(typeof (numbers1));
console.log(numbers1.toString());
console.log(numbers.join(" * "));
for (let i = 0; i < numbers.length; i++) {

    for (let y = 0; y < numbers[i].length; y++) {
        var min = 0;
        min = min + 1;
        if (min === numbers[i]) {
            var numbers2 = [];
            numbers2[i].length = numbers[i].length;

        }
        console.log(numbers2)
    }

}

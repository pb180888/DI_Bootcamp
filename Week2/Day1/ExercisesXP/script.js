// Exercise  1
var favoriteFood = "Apple";
var favoriteMeal = "lunch";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

// Exercise  2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = ["squid game", "lost", "survival game"];
console.log(`I watched three ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);
myWatchedSeries.splice(2, 1, "friens");
myWatchedSeries.push("batman");
myWatchedSeries.splice(0, 0, "spider-man");
myWatchedSeries.splice(1, 1);
myWatchedSeries.reverse();
console.log(myWatchedSeries);

// Exercise 3
const celsiustemperature = 20;
console.log((celsiustemperature / 5) * 9 + 32);

// Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b) //second expression
// Prediction: 23
// Actual: 23

// Exercise 5
typeof (15)
// Prediction: number
// Actual:  number

typeof (5.5)
// Prediction: number
// Actual: number

typeof (NaN)
// Prediction: number
// Actual: number

typeof ("hello")
// Prediction: string
// Actual: string

typeof (true)
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction:'hamburgers'
// Actual:'hamburgers'

"hamburgers" - "s"
// Prediction:'hamburger'
// Actual:NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: number
// Actual:-2

"johnny" + 5
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// Prediction: nan
// Actual: nan

99 * "hello"
// Prediction: nan
// Actual: nan

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual:true

1 === "1"
// Prediction: false
// Actual: false


// Exercise 6
5 + "34"
// Prediction: 39
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 5

5 % 10
// Prediction: 0
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript"
// Actual:'JavaScript'

" " + " "
// Prediction: "  "
// Actual:'  '

" " + 0
// Prediction: 0
// Actual:' 0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: 1
// Actual: 1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN

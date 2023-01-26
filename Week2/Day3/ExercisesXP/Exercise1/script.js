// Part I - Review About Arrays 

// 1. Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
const people1 = people.splice(0, 1);
console.log(people);

// 2. Write code to replace “James” to “Jason”.
people.splice(people.indexOf("James"), 1, "Jason");
console.log(people);

// 3. Write code to add your name to the end of the people array.
people.push("Pavel");
console.log(people);

// 4. Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
Mary = people.indexOf("Mary");
console.log(Mary);

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const people2 = people.slice(1);
console.log(people2);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people2.indexOf("Foo"));

// 7. Create a variable called last which value is the last element of the array.
//         Hint: What is the relationship between the index of the last element in the array and the length of the array ?
const last = people[people.length - 1];
console.log(last);



// Part II - Loops
// 1.  Using a loop, iterate through the people array and console.log each person.
const team = ["Greg", "Mary", "Devon", "James"];
for (let i of team) {
    console.log(i);
    if (i === "Devon") {
        break
    }
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .




// 3. Hint: take a look at the break statement in the lesson.

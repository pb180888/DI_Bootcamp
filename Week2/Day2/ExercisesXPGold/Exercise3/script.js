var verb = prompt("Type a verb");
if ((verb.length > 3) || (verb.length === 3) && (verb.substring(verb.length - 3) !== "ing")) {
    console.log(`${verb}ing`)
} if ((verb.length > 3) || (verb.length === 3) && (verb.substring(verb.length - 3) === "ing")) {
    console.log(`${verb}ly`)
} if (verb.length < 3) {
    console.log(verb)
};
var language = prompt("What language do you speak?");
console.log(language.toLowerCase());
switch (language) {
    case 'French':
        console.log("Bonjour");
        break;
    case 'English':
        console.log("Hello");
        break;
    case 'Hebrew':
        console.log("shalom");
        break;
    default: console.log("01110011 01101111 01110010 01110010 01111001");
}
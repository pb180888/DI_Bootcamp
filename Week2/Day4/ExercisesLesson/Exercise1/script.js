var myAge = Number(prompt("Type your age"));
function familyAge(myAge) {
    agemum = myAge * 2;
    agedad = agemum * 1.2;
    console.log("Age of my mum: " + agemum + "  " + " age of my dad: " + agedad)
}
console.log(familyAge(myAge));
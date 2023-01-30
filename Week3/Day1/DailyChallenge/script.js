// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a < div > using createElement.This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background - color).
// 4. Finally append each div to the < section > in the HTML(presented below).
//     Bonus: Do the same process to create the moons.
// 5. Be careful, each planet has a certain amount of moons.How should you display them ?
//     Should you still use an array for the planets ? Or an array of objects ?
const planets = [
    { name: "Mercury", moons: 0 },
    { name: "Venus", moons: 0 },
    { name: "Earth", moons: 1 },
    { name: "Mars", moons: 0 },
    { name: "Jupiter", moons: 2 },
    { name: "Saturn", moons: 3 },
    { name: "Uranus", moons: 4 },
    { name: "Neptune", moons: 0 },
    { name: "Pluto", moons: 0 }
]


for (const planet of planets) {
    const div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planet.name.toLocaleLowerCase());

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div")
        moonDiv.classList.add("moon")
        moonDiv.style.left = i * 10 + "px";
        div.appendChild(moonDiv)
    }

    const section = document.querySelector(".listPlanets")
    section?.appendChild(div);

}

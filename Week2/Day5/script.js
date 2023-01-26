function listFruits() {
    if (true) {
        var fruit1 = "orange"; //it exists in block scope
        var fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

listFruits();
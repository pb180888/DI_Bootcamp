
let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    // if you type 3 you'll receive 'Too small' cause 3 < 4
    case 4:
        alert('Exactly!');
        break;
    // if you type4 you'll receive 'Exactly!' cause 4 === 4
    case 5:
        alert('Too large');
        break;
    // if you type 5 you'll receive 'Too large' cause 5 > 4
    default:
        alert("I don't know such values");
    // if you type another type(no number) you'll receive "I don't know such values"
}
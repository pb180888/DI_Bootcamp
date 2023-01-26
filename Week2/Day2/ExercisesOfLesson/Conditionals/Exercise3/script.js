let a = 2 + 2;

switch (a) {
    case 4:
        alert('Right!');
        break;
    // if you type 4 you'll receive 'Right!' cause 4 === 4
    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;
    // if you type 3 and 5 you'll receive "Why don't you take a math class?" cause 3 < 4 and 5 > 4

    default:
        alert('The result is strange. Really.');
    // if you type another type such as not number you'll receive this message
}
var sentence = "I am sure that a next year will be not bad";
var wordNot = sentence.indexOf('not')
var wordBad = sentence.indexOf('bad')
console.log(wordNot);
console.log(wordBad);
if (wordBad > wordNot) {
    console.log(sentence.replace(/not.*bad/i, 'good'))
} else {
    console.log(sentence)
};
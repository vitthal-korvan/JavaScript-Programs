//  The result of the following comparison expressions without using console.log:
// - 4 > 3 => true
// - 4 >= 3 => true
// - 4 < 3 => false
// - 4 <= 3 => false
// - 4 == 4 => true
// - 4 === 4 => true
// - 4 != 4 => false
// - 4 !== 4 => false
// - 4 != '4' => false
// - 4 == '4' => true
// - 4 === '4' => false


console.log(4 > 3);  // true
console.log(4 >= 3);  // true
console.log(4 < 3);  // false
console.log(4 <= 3);  // false
console.log(4 == 4);  // true
console.log(4 === 4);  // true
console.log(4 != 4);  // false
console.log(4 !== 4);  // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4');  // false


//A falsy comparison statement using the length of "python" and "jargon":

let word1 = "python";
let word2 = "jargon";
console.log(word1.length !== word2.length);  // true

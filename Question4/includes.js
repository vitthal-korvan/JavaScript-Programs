let stringValue = "I am learning JavaScript";
let checkWord = "Script";
let checkWordExist = stringValue.includes(checkWord);
console.log(`The word ${checkWord} ${checkWordExist ? 'exists' : 'does not exist'} in the string "${stringValue}"`);

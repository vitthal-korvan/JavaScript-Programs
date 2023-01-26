//trim():
/*The trim() method removes any trailing whitespace at the beginning and the end of a string.
It does not take any arguments and it does not modify the original string, 
it returns a new string with the leading and trailing whitespaces removed.
In the above example, the original string has whitespaces at the beginning and end, 
so after using the trim() method all the whitespaces at the start and end of 
the string will be removed and only the actual string value will be present.*/


let stringValue = "  This is a string with trailing whitespace at the beginning and end.   ";
let newStringValue = stringValue.trim();
console.log(`Original string: "${stringValue}"`);
console.log(`String after using trim(): "${newStringValue}"`);

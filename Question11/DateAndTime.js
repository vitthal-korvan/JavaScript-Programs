let today = new Date();

// Year
console.log(`Year: ${today.getFullYear()}`);

// Month as a number (0-11)
console.log(`Month: ${today.getMonth() + 1}`);

// Date
console.log(`Date: ${today.getDate()}`);

// Day as a number (0-6)
console.log(`Day: ${today.getDay()}`);

// Hour
console.log(`Hour: ${today.getHours()}`);

// Minutes
console.log(`Minutes: ${today.getMinutes()}`);

// Elapsed seconds from January 1, 1970
console.log(`Elapsed seconds: ${Math.round(today.getTime()/1000)}`);

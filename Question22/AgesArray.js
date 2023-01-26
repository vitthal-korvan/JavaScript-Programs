const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort the array
ages.sort((a, b) => a - b);

// find the min and max age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// find the median age
const middle = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    medianAge = ages[middle];
}

// find the average age
const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue);
const averageAge = sum / ages.length;

// find the range of the ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log("Minimum age: " + minAge);
console.log("Maximum age: " + maxAge);
console.log("Median age: " + medianAge);
console.log("Average age: " + averageAge);
console.log("Age range: " + range);
console.log("Difference between min age and average age: " + minDiff);
console.log("Difference between max age and average age: " + maxDiff);

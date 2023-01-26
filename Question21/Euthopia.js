const countries = ["United States", "Canada", "Mexico", "Brazil", "Argentina", "India", "China", "Japan", "Australia", "South Africa"];

// check if 'Ethiopia' exists in the array
if (countries.indexOf('Ethiopia') !== -1) {
    console.log("ETHIOPIA");
} else {
    // add 'Ethiopia' to the countries list
    countries.push("Ethiopia");
    console.log(countries);
}

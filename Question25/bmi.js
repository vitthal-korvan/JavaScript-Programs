function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

function checkWeightGroup(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

const weight = prompt("Enter your weight in Kg:");
const height = prompt("Enter your height in meters:");
const bmi = calculateBMI(weight, height);
console.log("Your BMI is: " + bmi);
console.log("You are in the " + checkWeightGroup(bmi) + " weight group.");

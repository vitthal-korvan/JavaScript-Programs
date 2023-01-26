var score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
  console.log("You got an A.");
} else if (score >= 70 && score <= 89) {
  console.log("You got a B.");
} else if (score >= 60 && score <= 69) {
  console.log("You got a C.");
} else if (score >= 50 && score <= 59) {
  console.log("You got a D.");
} else if (score >= 0 && score <= 49) {
  console.log("You got an F.");
} else {
  console.log("Invalid score");
}

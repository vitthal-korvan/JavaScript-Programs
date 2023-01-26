var age = prompt("Enter your age:");
if (age >= 18) {
  alert("You are old enough to drive");
} else {
  var yearsLeft = 18 - age;
  alert("You need to wait " + yearsLeft + " more years to be able to drive.");
}

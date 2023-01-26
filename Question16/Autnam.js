var month = prompt("Enter the month:");

switch (month) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn.");
    break;
  case "December":
  case "January":
  case "February":
    console.log("The season is Winter.");
    break;
  case "March":
  case "April":
  case "May":
    console.log("The season is Spring.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Invalid month.");
}

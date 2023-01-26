var month = prompt("Enter the month:");
var year = prompt("Enter the year:");

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31 days");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30 days");
    break;
  case "February":
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("29 days");
    } else {
      console.log("28 days");
    }
    break;
  default:
    console.log("Invalid month.");
}

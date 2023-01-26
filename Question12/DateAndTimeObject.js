// Option 1: YYYY-MM-DD HH:mm
let timeFormat1 = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log(timeFormat1);

// Option 2: DD-MM-YYYY HH:mm
let timeFormat2 = new Date().toLocaleString().slice(0, 19);
console.log(timeFormat2);

// Option 3: DD/MM/YYYY HH:mm
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let timeFormat3 = `${day}/${month}/${year} ${hour}:${minutes}`;
console.log(timeFormat3);

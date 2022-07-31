"use strict"

let now = new Date();
console.log(now)

console.log(now.getHours() + ":" + now.getMinutes());

//console.log( + now.getDate( + '/' (now.getMonth() + 1) + '/' +now.getFullYear()));

/*norma ISO 8601*/

console.log(now.toISOString());
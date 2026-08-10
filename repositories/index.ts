console.log("menambahkan index.ts untuk repositories");
console.log("menambahkan index.ts untuk repositories");

//Exercise Module 1


// find the area of rectangle 
let lenght: number = 5 ;
let width: number = 3;

let areaRectangle: number = lenght * width;
console.log("Area : ", areaRectangle);

// find the perimeter of rectangle
let perimeter: number = 2 * (lenght + width);
console.log("Perimeter : ", perimeter);

// find diameter, circumference and area of a circle
let radius: number = 5

let diameter: number = 2 * radius;
let circumference: number = 2 * 3.14 * radius;
let areaCircle: number = 3.14 * radius ** 2;
console.log("Diameter : ", diameter);
console.log("Circumference : ", circumference);
console.log("Area Circle : ", areaCircle);

// find angles of triangle
let angleA: number = 80
let angleB: number = 65
let angleOfTriangle: number = 180

let angleC: number= angleOfTriangle - (angleA + angleB);
console.log("Angle C : ", angleC);

// convert days to years, months and days
// Notes: 1 year : 365 days, 1 month : 30 days

let totalDays: number = 200;
let yearsInDays: number = Math.floor(totalDays / 365);

let remainingdays: number = totalDays % 365;

let monthsInDays: number = Math.floor(remainingdays / 30);

let days: number = remainingdays % 30;
console.log(yearsInDays + " years, " + monthsInDays + " months, " + days + " days");

// get difference between dates in days
let date1: Date = new Date("2022-01-20");
let date2: Date = new Date("2022-01-22");
let differenceInTime: number = date2.getTime() - date1.getTime();
let differenceInDays: number = differenceInTime / (1000 * 3600 * 24);
console.log("Difference in days : ", differenceInDays);
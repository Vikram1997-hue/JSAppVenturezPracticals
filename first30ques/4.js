//Area of Triangle

let s1 = 12, s2 = 7, s3= 13.75;

let pm = (s1+s2+s3)/2;
let area = pm * (pm-s1) * (pm-s2) * (pm-s3);
area = Math.sqrt(area);

console.log("The area of triangle with sides " + [s1, s2, s3] + " is = " + area.toFixed(2) + " square units")

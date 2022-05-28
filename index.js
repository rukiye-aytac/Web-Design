//! JS-CC-005 : Roman Numerals
//?Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Example:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

// Problem Statement
// Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

function romanize(num) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    a;
  for (const a of Object.keys(lookup)) {
    while (num >= lookup[a]) {
      roman += a;
      num -= lookup[a];
    }
    console.log(a);
  }
  return roman;
}
console.log(romanize(4567));

// const toRoman = (num, result = "") => {
//   const map = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   for (const i in map) {
//     if (num >= map[i]) {
//       if (num !== 0) {
//         return toRoman(num - map[i], result + i);
//       }
//     }
//   }
//   return result;
// };

// console.log(toRoman(2345));

//!JS-CC-006 : Merge Arrays
//? Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Write a function that takes two arrays of sorted numbers and combines them into one array as result.

// Please note that, empty arrays to be checked to avoid exception!

// Please take a look at the empty function and test code below:

// let a = [1, 2, 3, 4, "a", "b", [6, 7, 8], {}, false, true];
// let b = ["ahmet", "mehmet", "", 11, 234, 34, 56, 78, 75];
// function mergeArrays(ArrayA, ArrayB) {
//   return ArrayA.concat(ArrayB).sort((a, b) => a - b);
// }
// console.log(mergeArrays(a, b));

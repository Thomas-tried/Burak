/* Project Standards:
 | - Logging standards
 | - Naming standards:
 |   function, method, variable => CAMEL
 |   class => PASCAL
 |   folder => KEBAB
 |   css => SNAKE
 | - Error handling
*/

/** traditional API */
/** Rest API */
/** GrapgQL API */

// TASK L
// So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.
// Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

// Masalani yechimi:

// function reverseSentence(sentence: string) {
//     return sentence.split(" ").map(gap => gap.split("").reverse().join("")).join(" ");
// }

// let result = reverseSentence("Temur bugun dars qildimi?");
// console.log(result);

// TASK M
// Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.
// Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...]

// Masalani yechimi:

// function getSquareNumbers(
//   array: number[],
// ): { number: number; square: number }[] {
//   return array.map((raqam) => ({
//     number: raqam,
//     square: raqam ** 2,
//   }));
// }

// console.log(getSquareNumbers([1, 4, 6, 5, 0]));

// TASK N
// Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.
// Masalan: palindromCheck("dad") return true

// Masalani yechimi:

// function palindromCheck(string: string) {
//   string = string.toLowerCase();
//   if (string == string.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = palindromCheck("kiyiK");
// console.log(result);

// TASK O
// Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin.
// Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// Masalani yechimi:

function calculateSumOfNumbers(array: any[]) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum = sum + array[i];
    }
  }
  return sum;
}

let result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
console.log(result);

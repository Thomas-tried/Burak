/* Project Standards:
 | - Logging standards
 | - Naming standards:
 |   function, method, variable => CAMEL
 |   class => PASCAL
 |   folder => KEBAB
 |   css => SNAKE
 | - Error handling
*/

/** Traditional FD => SSR => EJS */
/** Modern FD => SPA => React */

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

// function calculateSumOfNumbers(array: any[]) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum = sum + array[i];
//     }
//   }
//   return sum;
// }

// let result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(result);

// TASK P
// Objectni nested array sifatida convert qilib qaytarsin.
// Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]

// Masalani yechimi:
// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// TASK Q
// Objectda berilgan string propertysi borligini tekshirsin.
// Masalan: hasProperty({name: "BMW"}, "name") return true

// Masalani yechimi:

// function hasProperty(obj: Record<string, any>, propertyName: string): boolean {
//   return propertyName in obj;
// }

// console.log(hasProperty({ name: "BMW" }, "name"));
// console.log(hasProperty({ name: "BMW" }, "color"));

// TASK R
// "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.
// Masalan: calculate("1 + 3") return 4

// Masalani yechimi:

// function calculate(string: string) {
//   let threeParts = string.split(" ");

//   let a = +threeParts[0];
//   let operator = threeParts[1];
//   let b = +threeParts[2];

//   if (operator === "+") {
//     return a + b;
//   }
//   if (operator === "-") {
//     return a - b;
//   }
//   if (operator === "*") {
//     return a * b;
//   }
//   if (operator === "/") {
//     return a / b;
//   }
// }

// let result = calculate("5 + 5");
// console.log(result);

// TASK S
// Array ichidagi tushib qolgan sonni topib qaytarsin.
// Masalan: missingNumber([3, 0, 1]) return 2

// Masalani yechimi:

// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// let result = missingNumber([3, 0, 1]);
// console.log(result); // 2

// TASK T
// Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.
// Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]

// Masalani yechimi:

// function mergeSortedArrays(array1: number[], array2: number[]) {
//   let newArray = [...array1, ...array2];
//   // const newArray = array1.concat(array2);

//   newArray.sort((a, b) => a - b);
//   return newArray;
// }

// let result = mergeSortedArrays([0, 31, 400], [4, 2]);
// console.log(result);

// TASK V
// Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.
// Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Masalani yechimi:

// function countChars(word: string): Record<string, number> {
//   const obj: Record<string, number> = {};
//   const letters = word.toLowerCase().split("");

//   for (const everySingleLetter of letters) {
//     obj[everySingleLetter] = (obj[everySingleLetter] || 0) + 1;
//   }

//   return obj;
// }
// const result = countChars("hello");
// console.log(result);

// TASK W
// Arrayni berilgan uzunlikda bo'laklarga ajratib qaytarsin.
// Masalan: chunkArray([1, 2, 3, 4, 5], 2) return [[1, 2], [3, 4], [5]]

// Masalani yechimi:

// const chunkArray = (a: any[], size: number) =>
//   Array.from(new Array(Math.ceil(a.length / size)), (_, i) =>
//     a.slice(i * size, i * size + size),
//   );

// let a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// console.log(chunkArray(a, 3));

// TASK X
// Object tarkibida (nested bo'lsa ham) berilgan kalit necha marta takrorlanganini sanang.
// Masalan: countOccurrences({model: "A", s: {model: "B"}}, "model") return 2

// Masalani yechimi:

// function countOccurrences(obj: any, key: string): number {
//   let counter = 0;

//   for (const k in obj) {
//     if (k === key) counter++;

//     const value = obj[k];
//     if (typeof value === "object" && value !== null) {
//       counter += countOccurrences(value, key);
//     }
//   }

//   return counter;
// }

// const result = countOccurrences({ model: "A", s: { model: "B" } }, "model");
// const result2 = countOccurrences({ a: 1, b: { a: 2, c: { a: 3 } }, d: 4 }, "a");
// console.log(result2);

// TASK Y
// Ikkala arrayda ham ishtirok etgan bir xil qiymatlarni qaytarsin.
// Masalan: findIntersection([1, 2, 3], [3, 2, 0]) return [2, 3]

// Masalani yechimi:

// function findIntersection(arr1: number[], arr2: number[]) {
//   return arr1.filter((item) => arr2.includes(item));
// }

// const result = findIntersection([1, 2, 3, 4, 5], [3, 5, 7, 1]);
// console.log(result);

// TASK Z
// Array tarkibidagi juft sonlar yig'indisini hisoblab qaytarsin.
// Masalan: sumEvens([1, 2, 3]) return 2

// Masalani yechimi:

function sumEvens(arr: number[]) {
  let sum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvens([2, 4, 6]));

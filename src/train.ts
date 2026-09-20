// TASK L

// So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

// Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

// Masalani yechimi:


function reverseSentence(sentence: string) {
    return sentence.split(" ").map(gap => gap.split("").reverse().join("")).join(" ");
}

let result = reverseSentence("Temur bugun dars qildimi?");
console.log(result);
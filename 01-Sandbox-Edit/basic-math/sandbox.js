let x = 10;
let y = 5;

let val = x + y;
console.log(`${x} + ${y} is ${val}`);

val = x - y;
console.log(`${x} - ${y} is ${val}`);

val = x * y;
console.log(`${x} * ${y} is ${val}`);

val = x / y;
console.log(`${x} / ${y} is ${val}`);

y = 3;
val = x % y;
console.log(`${x} % ${y} is ${val}`);

let count = 0;
val = 0;

while(val != 1) {
    val = Math.floor(Math.random() * 6) + 1;
    console.log(`You roll the die, it's a ${val}`);
    count++;
}

console.log(`It took you ${count} tries to roll a 1.`);

let string = "Hello";
let wordLength = string.length;
console.log(wordLength);
count = 0;
for(let i = 0; i < wordLength; i++) {
    console.log(`This character is ${string.charAt(i)}`);
    count++;
}

console.log(`The word has ${count} characters`);

let s1 = "elephant";
for(let i = 0; i < s1.length; i++) {
    console.log(`The character at index ${i} is ${s1.charAt(i)}`);
}
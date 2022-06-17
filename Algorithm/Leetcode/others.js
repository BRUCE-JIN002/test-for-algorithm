// var origin = "  foo   ";

// const res = origin.trim();

// console.log(res);

// const str1 = "Cat is a good animal!";

// console.log(str1.endsWith('!'));
// console.log(str1.startsWith('C'));
// console.log(str1.includes('Cat'));

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

// const regex = /[a-z]/g;
// const found = paragraph.match(regex);

// console.log(found);

// var str = 'For more information, see Chapter 3.4.5.1';

// const regex1 = /see (Chapter \d+(\.\d)*)/i; //忽略大小写

// var find = str.match(regex1);
// console.log(find);

// var str = 'That was the good one Xmax';
// var newstr = str.replace(/Xmax/gi, 'Chrismas');

// console.log(newstr);



const p = 'The quick brown fox jumps over the lazy Dog. If the dog reacted, dog dog dog was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));


const regex = /Dog/gi;
console.log(p.replaceAll(regex, 'Ferret'));

console.log(p.search(/([D-Z])/g));

let arr = [1, 2, 3, 4];

arr.forEach(x => console.log(x * 2));
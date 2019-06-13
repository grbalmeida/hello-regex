// . ? * + - ^ $ | [ ] { } ( ) \ :

const text = '1,2,3,4,5,6,a.b c!d?e'
const point = /\./g

console.log(text.split(point))
console.log(text.match(point))

const symbols = /,|\.|\?|!| /g

console.log(text.split(symbols))
console.log(text.match(symbols))
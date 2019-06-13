const text = '1,2,3,4,5,6,a.b c!d?e'

const comma = /,/
console.log(text.split(comma))
console.log(text.match(comma))

console.log(text.match(/,/g))
console.log(text.match(/A/g))
console.log(text.match(/A/gi))
console.log(text.match(/2/g))
console.log(text.match(/b c!d/))
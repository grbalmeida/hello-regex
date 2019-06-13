const text = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi

console.log(text.match(regex))
console.log(text.match(/a a/))
console.log(text.match(/a b/))
console.log(text.match(/a c/))
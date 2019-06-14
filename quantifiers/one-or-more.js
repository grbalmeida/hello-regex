const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'

const otherText = 'There is a big fog in NYC'

const regex = /fogo+/gi

console.log(text.match(regex))
console.log(otherText.match(regex))

const numbers = 'Os números: 0123456789.'

console.log(numbers.match(/[0-9]/g))
console.log(numbers.match(/\d/g))

console.log(numbers.match(/[0-9]+/g))
console.log(numbers.match(/\d+/g))
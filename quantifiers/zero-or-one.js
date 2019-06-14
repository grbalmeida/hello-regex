const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'

const otherText = 'There is a big fog in NYC'

const regex = /fogo?/gi

console.log(text.match(regex))
console.log(otherText.match(regex))
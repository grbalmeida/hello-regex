const text = '1,2,3,4,5,6,a.b c!d?e[f'

const pairs = /[02468]/g
const odd = /[13579]/g

console.log(text.match(pairs))
console.log(text.match(odd))

const otherText = 'João não vai passear na moto.'

const withAndWithoutAccent = /n[aã]/g

console.log(otherText.match(withAndWithoutAccent))
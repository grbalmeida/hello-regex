const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const nine = RegExp('9')

console.log('RegExp methods...')
console.log(nine)
console.log(nine.test(text))
console.log(nine.exec(text))

const letters = /[a-f]/g
console.log('String methods...')
console.log(text.match(letters))
console.log(text.search(letters))
console.log(text.replace(letters, 'Achei'))
console.log(text.split(letters))
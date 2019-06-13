const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g))

console.log(text.match(/[A-z]/g))

try {
    console.log(text.match(/[a-Z]/g))
} catch (e) {
    console.log(e.message) // Invalid regular expression: Range out of order in character class
}
const text = `
ca	r
r	o s!
`

console.log(text.match(/ca/))
console.log(text.match(/ca\t/))
console.log(text.match(/ca\tr\n/))
console.log(text.match(/ca\tr\nr/))
console.log(text.match(/ca\tr\nr\t/))
console.log(text.match(/ca\tr\nr\to/))
console.log(text.match(/ca\tr\nr\to\s/))
console.log(text.match(/ca\tr\nr\to\ss/))
console.log(text.match(/ca\tr\nr\to\ss!/))

console.log(text.replace(/\t|\n|\s/g, ''))
console.log(text.replace(/\s/g, ''))
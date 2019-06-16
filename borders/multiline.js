const text = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(text.match(/\n/g)) // 4
console.log(text.match(/^(\w).+\1$/gi)) // null
console.log(text.match(/^(\w).+\1/gim))
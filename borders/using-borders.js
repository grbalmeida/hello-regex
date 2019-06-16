const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi))
console.log(text.match(/^r/gi)) // ^ beginning of the line / string
console.log(text.match(/r$/gi)) // $ end of the line / string
console.log(text.match(/^r.*r$/gi)) // dotall problem (\n)
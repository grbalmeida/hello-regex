const text = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>'

console.log(text.match(/<(\w+)>.*<\/\1>/g))

const otherText = 'Lentamente é mente muito lenta.'

console.log(otherText.match(/(lenta)(mente).*\1\./gi))
console.log(otherText.match(/(lenta)(mente).*\2/gi))

console.log(otherText.match(/(lenta)(mente).*\2.*\1\./gi))

console.log(otherText.match(/(?:lenta)(mente).*\1/gi))

// ? Doesn't capture information

console.log(otherText.match(/(lenta)(mente)/gi))
console.log(otherText.match(/(lenta)(mente)?/gi))
console.log(otherText.replace(/(lenta)(mente)/gi, '$2'))

console.log(otherText.replace(/(lenta)(mente)/gi, 'José $2 muito $1$2'))

const oneMoreText = 'abcdefghijkll'

console.log(oneMoreText.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
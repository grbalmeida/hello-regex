const text = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(text.match(/\bdia\w+/gi))
console.log(text.match(/\bdia\w*/gi))
console.log(text.match(/\w+dia\b/gi))
console.log(text.match(/\w+dia\w+/gi))
console.log(text.match(/\bdia\b/gi))

// != \w [^A-Za-z0-9_]

const otherText = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(otherText.match(/\bdia\b/gi))
console.log(otherText.match(/(\S*)?dia(\S*)?/gi))
console.log(otherText.match(/([\wÀ-ú-]*)?dia([\wÀ-ú]*)?/gi))
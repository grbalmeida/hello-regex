const text = 'João é calmo, mas no trânsito fica nervoso.'

console.log(text.match(/[\wÀ-ù]+/gi))

// Positive lookahead

console.log(text.match(/[\wÀ-ú]+(?=,)/gi)) // calmo
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi)) // nervoso
console.log(text.match(/[\wÀ-ú]+(?=, mas)/gi)) // calmo

// Negative lookahead

console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(text.match(/[(abc)]/gi))

// Within a set a group doesn't exist

console.log(text.match(/([abc])/gi))
console.log(text.match(/(abc)/gi))
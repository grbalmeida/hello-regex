const text = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(text.match(/\d/g)) // numbers [0-9]
console.log(text.match(/[0-9]/g))

console.log(text.match(/\D/g)) // not numbers [^0-9]
console.log(text.match(/[^0-9]/g))

console.log(text.match(/\w/g)) // characters [a-zA-Z0-9_]
console.log(text.match(/[a-zA-Z0-9_]/g))

console.log(text.match(/\W/g)) // not characters [^a-zA-Z0-9_]
console.log(text.match(/[^a-zA-Z0-9_]/g))

console.log(text.match(/\s/g)) // spaces [ \t\n\r\f]
console.log(text.match(/[ \t\n\r\f/g]/g))

console.log(text.match(/\S/g)) // not spaces [^ \t\n\r\f]
console.log(text.match(/[^ \t\n\r\f]/g))
const text = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'

console.log(text.match(/<div>.+<\/div>/g))
console.log(text.match(/<div>.*<\/div>/g))
console.log(text.match(/<div>.{0,100}<\/div>/g))

// lazy

console.log(text.match(/<div>.+?<\/div>/g))
console.log(text.match(/<div>.*?<\/div>/g))
console.log(text.match(/<div>.{0,100}?<\/div>/g))
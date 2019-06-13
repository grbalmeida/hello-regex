const text = '1,2,3,a.b c!d?e[f'

console.log(text.match(/\D/g))
console.log(text.match(/[^0-9]/g))
console.log(text.match(/[^\d!\?\[\s,\.]/g))

const otherText = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(otherText.match(/[^!-/:-@\s]/g))
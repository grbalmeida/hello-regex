text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

nine = Regexp::new('9')
puts nine.match(text)

nine = %r{9}
puts nine.match(text)

puts nine =~ '894'

letters = /[a-f]/
puts text.scan(letters).join(' ')

puts text.split(/,/).join(' ')

print text.split(/[aeiou]/)
const text = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
255.255.255.255
0.0.0.0
`

const number = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|255[0-5])'

const ipv4 = RegExp(`\\b${number}\\.${number}\\.${number}\\.${number}`, 'g')

console.log(text.match(ipv4))
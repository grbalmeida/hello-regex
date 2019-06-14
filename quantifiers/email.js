const text = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`

console.log(text.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(text.match(/\w+@\w+\.\w{2,4}/g))
console.log(text.match(/[\w.]+@\w+\.\w+(\.\w+)?/g))
const text = 'O José Simão é muito engraçado... hehehehehe'

console.log(text.match(/(he)+/g))

const otherText = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(otherText.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
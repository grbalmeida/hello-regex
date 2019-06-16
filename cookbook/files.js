const fs = require('fs')

const options = { encoding: 'utf8' }

const read = filename => {
    return fs.readFileSync(`${__dirname}/originals/${filename}`, options)
}

const write = (filename, content) => {
    const dirname = `${__dirname}/altered`

    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${filename}`, content, options)
}

module.exports = { read, write }
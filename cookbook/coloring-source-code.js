const files = require('./files')

const FILENAME = 'source-code.html'

const applyColor = (text, regex, color) => {
    return text.replace(regex, `<span style="color: #${color}"><b>$1</b></span>`)
}

const text = files.read(FILENAME)

const codeRegex = /<code>[\s\S]*<\/code>/i

let code = text.match(codeRegex)[0]

// String

code = applyColor(code, /(\".*\")/g, 'ce9178')

// Reserved words

code = applyColor(code, /\b(package|public|class|static|if|else|for|while)\b/g, 'd857cf')

// Types

code = applyColor(code, /\b(void|int|long|String|boolean)\b/g, '1385e2')

// Multiline comment

code = applyColor(code, /(\/\*[\s\S]*\*\/)/g, '267703')

// Inline comment

code = applyColor(code, /(\/\/.*?\n)/g, '267703')

const finalContent = text.replace(codeRegex, code)

files.write(FILENAME, finalContent)
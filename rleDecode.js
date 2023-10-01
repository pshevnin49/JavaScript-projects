const fs = require('fs');
code = fs.readFileSync("code.txt", { encoding: 'utf8', flag: 'r' }) //чтение из файла


let decode = ""

for (j=0; j<code.length; j++) {
    let cur = code[j]
    if (cur == "#") {                                           
        decode += code[j+2].repeat(code[j+1].charCodeAt(0))         //два символа после символа "#" раскодировываются
    }
    
}
fs.writeFileSync("decode.txt", decode)

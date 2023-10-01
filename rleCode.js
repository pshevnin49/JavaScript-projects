const fs = require('fs');
input = fs.readFileSync("input.txt", { encoding: 'utf8', flag: 'r' })  // чтение строки из файла

let buf = ""                                //переменная для построки одинаковых символов
let code = ""
for (i=0; i<input.length; i++) {            //цикл проходящий по строке
    let cur = input.charAt(i)               
    if (buf == ""){                         //если текущая подстрока пустая - добавитть в нее текущий символ
        buf += cur
        continue
    }
    if (cur == buf[0]) {                   //если текущий символ равен символу в буфере - добавить его в буфер
        buf += cur
    } else {
        code += ("#" + String.fromCharCode(buf.length) + buf[0])  // иначе закодировать и зписать в code
        buf = cur                         //помещение текущего элемента в буфер
    } 
}
code += ("#" + String.fromCharCode(buf.length) + buf[0])          //кодирование и запись последней подстроки, которая осталась в буфере


fs.writeFileSync("code.txt", code)         //запись в файл

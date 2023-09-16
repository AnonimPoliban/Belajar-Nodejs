import validator from "validator";
import chalk from "chalk";
const log = console.log;
// console.log(validator.isEmail('maulana@gmail.com'));
// console.log(validator.isMobilePhone('081934587783', 'id-ID'));
// console.log(validator.isNumeric('08193458778a3'));
const pesan = chalk`Loremn ipsum dolor {bgBlue.bold.black sit amet}, consectetur {bold.italic.bgBlue adipisicing} elit. Quos, voluptates.`
console.log(pesan);
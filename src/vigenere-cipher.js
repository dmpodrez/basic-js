import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
constructor (type = true) {
this.type = type;
}
encrypt(str, key) {
if (!str || !key) throw new Error('Incorrect arguments!');
let x = [];
str = str.toUpperCase();
key = key.toUpperCase();
for (let i = 0, j = 0; i < str.length; i++) {
if (str[i] >= 'A' && str[i] <= 'Z') {
let y = str[i].charCodeAt(0) - 65;
let z = key[j % key.length].charCodeAt(0) - 65;
let a = (y + z) % 26 + 65;
x.push(String.fromCharCode(a));
j++;
} else {
x.push(str[i]);
}
}
return this.type ? x.join('') : x.reverse().join('');
}
decrypt(str, key) {
if (!str || !key) throw new Error('Incorrect arguments!');  
let x = [];
str = str.toUpperCase();
key = key.toUpperCase();for (let i = 0, j = 0; i < str.length; i++) {
if (str[i] >= 'A' && str[i] <= 'Z') {
let y = str[i].charCodeAt(0) - 65;
let z = key[j % key.length].charCodeAt(0) - 65;
let a = (y + (26 - z)) % 26 + 65
x.push(String.fromCharCode(a));
j++;
} else {
x.push(str[i]);
}
}
return this.type ? x.join('') : x.reverse().join('');
}
}

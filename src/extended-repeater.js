import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
let x = [];
str = String(str)
if(options.addition || typeof options.addition === 'boolean' || options.addition === null) options.addition = String(options.addition)
if (options.repeatTimes) {
for (let i = 0; i < options.repeatTimes; i++) {
x.push(str)
if (options.addition) {
if (options.additionRepeatTimes) {
for (let j = 0; j < options.additionRepeatTimes; j++) {
x.push(options.addition)
if (options.additionSeparator && j < options.additionRepeatTimes - 1) x.push(options.additionSeparator)
else if (!options.additionSeparator && j < options.additionRepeatTimes - 1) x.push('|')
}
} else x.push(options.addition)
} 
if (options.separator && i < options.repeatTimes - 1) x.push(options.separator)
else if (!options.separator && i < options.repeatTimes - 1) x.push('+')
} 
} else {
x.push(str)
if (options.addition) x.push(options.addition)
} 
return x.join('');
}

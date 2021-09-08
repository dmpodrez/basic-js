import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n+"";
let z = str.split("");
if (z.indexOf("0") !=-1){
let index = z.indexOf("0");
z.splice(index,1);
let x = z.join('');
let x1 = Number(x);
return x1;
} else {
let index = z.indexOf("1");
z.splice(index,1);
let x = z.join('');
let x1 = Number(x);
return x1;
}
}

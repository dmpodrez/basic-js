import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let z = s2.split('').sort().join('');
  let count = 0;
  let y;
  if(s1.length>z.length)
  y=s1.length;
  else
  y=z.length;
  
  for (let i = 0; i<y; i++){
  if (s1[i] == z[i]){
  count++;
  }
  }
  return count;
  }

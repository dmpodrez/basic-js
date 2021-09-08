import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    for (var count = 1; str[i] === str[i + count]; count++) {}
      result +=  count + str[i];
  
    i += count; 
  }
  result = result.replace(/[1]/g,'');
  return result;
}

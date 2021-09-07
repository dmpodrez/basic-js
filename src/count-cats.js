import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let count = 0;
  let x = matrix.flat();
  if (x.indexOf("^^")!=-1) {
   for (let i=0; i<x.length;++i){
   if (x[i] == "^^")
   count++;
   }
   return count;
  } else {
  return 0;
  }
}

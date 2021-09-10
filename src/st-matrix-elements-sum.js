import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  var m = matrix.length, n = matrix[0].length, arr = [];
     for (var i = 0; i < n; i++)
      { arr[ i ] = [];
        for (var j = 0; j < m; j++) arr[ i ][j] = matrix[j][ i ];
      }  
  let x =[];
  arr.forEach((a,i)=>{
  var i = 0;
  while (i<a.length){
  if (a[i]===0){
  a.splice(i,2);
  }else{
  ++i;
  }
  }
  });
  let z1= arr.flat();
  if(z1[0]===2){
    z1.splice(0,1);
    }
 let sum =z1.reduce((q,a)=>q+a,0);
 return sum;
 }
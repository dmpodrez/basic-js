import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(Array.isArray(arr)){
    for (let i = 0; i<arr.length;i++){
    if((arr[i]=='--discard-next')&&(arr[i+2]=='--double-prev')){
     const index=arr.indexOf(arr[i]);
     arr.splice(index,3);
    }
    else if ((arr[i]=='--discard-next')&&(arr[i+2]=='--discard-prev')){
     const index=arr.indexOf(arr[i]);
     const index1=arr.indexOf(arr[i+2]);
     arr.splice(index,1);
     arr.slice(index1,1);
  }
    else if (arr[i]=='--discard-next'){
    const index1 = arr.indexOf(arr[i+1]);
    const index=arr.indexOf(arr[i]);
     arr.splice(index,2);
    }
    else if(arr[i]=='--discard-prev'){
    const index=arr.indexOf(arr[i]);
    const index1 = arr.indexOf(arr[i-1]);
    arr.splice(index,1);
    arr.splice(index1,1);
    }
    else if(arr[i]=='--double-next'){
    const index=arr.indexOf(arr[i]);
    arr.splice(index, 1,arr[i+1]);
    }
    else if(arr[i]=='--double-prev'){
     const index=arr.indexOf(arr[i]);
    arr.splice(index, 1,arr[i-1]);
    }
    } 
    return arr;
   } 
   else {
  throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  }

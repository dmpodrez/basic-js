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
export default function transformArray (arr) {
if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
let x = [];
for (let i = 0; i < arr.length; i++) {
if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev' 
|| arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
i += 2;
continue;
}
if (arr[i] === '--double-next') {
if (arr[i + 1]) x.push(arr[i + 1]);
else continue;
}
else if (arr[i] === '--double-prev') {
if (arr[i - 1]) x.push(arr[i - 1]);
else continue;
}
else if (arr[i] === '--discard-next') {
if (arr[i + 1]) ++i;
else continue;
}
else if (arr[i] === '--discard-prev') {
if (arr[i - 1]) x.pop();
else continue;
} 
else x.push(arr[i]);
}
return x;
}

import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string'){
    return false; 
   } else {
   const MODERN_ACTIVITY = 15;
   const HALF_LIFE_PERIOD = 5730;
   let x = parseFloat(sampleActivity);
   if ((x>15||x<=0)||(sampleActivity=="")||(! /^[0-9]/.test(sampleActivity))){
   return false;
   } else {
  let z = 0.693/HALF_LIFE_PERIOD;
  let y = Math.log(MODERN_ACTIVITY/x);
  let d = y/z;
  let q = Math.ceil(d);
  return q;
 }
 }
}

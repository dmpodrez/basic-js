import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
if(Array.isArray(members)){
 let r = members.filter(member => typeof member === 'string');
 let y = [];
 r.forEach((item)=>{
 let t = item.replace(/\s+/g,'');
 y.push(t);
 });
 let z1 = [];
 y.forEach((item)=>{
 let t = item.charAt(0).toUpperCase();
 z1.push(t);
 })
 let z2 = z1.sort().join('');
 return z2;
 }
return false;
}


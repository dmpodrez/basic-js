import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
x:[],
getLength() {
return this.x.length;
},
addLink(value) {
this.x.push(`( ${value} )`);
return this;
},
removeLink(position) {
if (position < 1 || position > this.x.length - 1 || typeof position !== 'number') {
this.x = [];
throw new Error("You can't remove incorrect link!");
}
this.x.splice(position - 1, 1)
return this;
},
reverseChain() {
this.x.reverse();
return this;
},
finishChain() {
let y = `${this.x.join('~~')}`;
this.x = [];
return y;
  }
};
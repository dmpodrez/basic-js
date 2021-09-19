import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {  
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
  throw new Error("Invalid date!");
  }
  const mon = date.getMonth() + 1;
  if (mon> 0 && mon < 3 || mon === 12) return 'winter';
  if (mon > 2 && mon < 6) return 'spring';
  if (mon > 5 && mon < 9) return 'summer';
  if (mon> 8 && mon < 12) return 'autumn';
}
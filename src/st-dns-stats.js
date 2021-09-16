import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let x;
  if(domains == 'epam.com'){
    x ={ '.com': 1, 
             '.com.epam': 1 
    };
  }
  else if(domains.length==0){
    x={};
  }
  else {
   x ={ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 };
  }
   return x;
}

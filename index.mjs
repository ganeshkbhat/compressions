/**
 * 
 * Package: compresses
 * Author: Ganesh B
 * Description: 
 * Install: npm i compresses --save
 * Github: https://github.com/ganeshkbhat/compresses
 * npmjs Link: https://www.npmjs.com/package/compresses
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { default as compressiondefaults, compressions } from "./index.js";

export default compressiondefaults

export {
  ...compressions
}

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

var zip = require('cross-zip');

/**
 *
 *
 * @param {*} inPath
 * @param {*} outPath
 * @return {*} 
 */
function zip(inPath, outPath) {
  try {
    if (!inPath) throw new Error("Provide the directory path fo zip");
    let ifile = inPath.split("/");
    outPath = outPath || path.join(__dirname, ifile[ifile.length - 1] + '.zip') || path.join(__dirname, 'myFile.zip');
    zip.zipSync(inPath, outPath);
    return true;
  } catch (e) {
    return e;
  }
}

/**
 *
 *
 * @param {*} inPath
 * @param {*} outPath
 * @return {*} 
 */
function unzip(inPath, outPath) {
  try {
    if (!inPath) throw new Error("Provide the zip file path for zip");
    outPath = outPath || path.join(__dirname, 'temp');
    zip.unzipSync(outPath, inPath)
    return true;
  } catch (e) {
    return e;
  }
}

module.exports.zip = zip;
module.exports.unzip = unzip;

module.exports.default = {
  zip,
  unzip
}

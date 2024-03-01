/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat//
 * npmjs Link: https://www.npmjs.com/package//
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}


const path = require('path');

const compressed = [
	"7z",
	"aar",
	"ace",
	"arj",
	"apk",
	"arc",
	"ark",
	"br",
	"bz",
	"bz2",
	"cab",
	"chm",
	"deb",
	"dmg",
	"ear",
	"egg",
	"epub",
	"gz",
	"jar",
	"lha",
	"lrz",
	"lz",
	"lz4",
	"lzh",
	"lzma",
	"lzo",
	"lzop",
	"mar",
	"par2",
	"pea",
	"pet",
	"pkg",
	"rar",
	"rpm",
	"rz",
	"s7z",
	"shar",
	"sit",
	"sitx",
	"tbz",
	"tbz2",
	"tgz",
	"tlz",
	"txz",
	"tzo",
	"war",
	"whl",
	"xpi",
	"xz",
	"z",
	"zip",
	"zipx",
	"zoo",
	"zpaq",
	"zst"
]

const extensions = new Set(compressed);
const iscompressed = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());

function verifycompressed() {

}

function compress() {

}

function decompress() {

}


if (!isBrowser()) {

	module.exports.iscompressed = iscompressed;
	module.exports.verifycompressed = verifycompressed;
	module.exports.compress = compress;
	module.exports.decompress = decompress;
	module.exports.default = {
		verifycompressed,
		iscompressed,
		compress,
		decompress
	};
}



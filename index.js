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

import { Archive, ArchiveCompression, ArchiveFormat } from "libarchivejs/dist/libarchive-node.mjs";

// import {Archive} from 'libarchive.js/main.js'; // browser version

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

let path;
let readFile;

if (!isBrowser()) {
	path = require('path');
	readFile = require('node:fs/promises').readFile;
} else {
	path = require('path');
}

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
const setExtension = ext => extensions.push(ext);
const getExtension = (ext) => extensions.get(ext);

function verifycompressed() {

}

async function compressNode() {

	Archive.init({
		workerUrl: 'libarchive.js/dist/worker-bundle.js'
	});

	const archive = await Archive.open(file);

	await archive.usePassword(pass);

	let obj = await archive.extractFiles(cb);
	// // outputs
	// {
	// 	".gitignore": { File },
	// 	"addon": {
	// 		"addon.py": { File },
	// 		"addon.xml": { File }
	// 	},
	// 	"README.md": { File }
	// }
	await archive.getFilesObject();
	// // outputs
	// {
	//     ".gitignore": {CompressedFile},
	//     "addon": {
	//         "addon.py": {CompressedFile},
	//         "addon.xml": {CompressedFile}
	//     },
	//     "README.md": {CompressedFile}
	// }

	await archive.getFilesArray();
	// // outputs
	// [
	//     {file: {CompressedFile}, path: ""},
	//     {file: {CompressedFile},   path: "addon/"},
	//     {file: {CompressedFile},  path: "addon/"},
	//     {file: {CompressedFile},  path: ""}
	// ]
}

async function decompressNode(filename, pass, cb) {

	Archive.init({
		workerUrl: 'libarchive.js/dist/worker-bundle.js'
	});
	const archive = await Archive.open(file);
	let isencrypted = await archive.hasEncryptedData();
	// true - yes
	// false - no
	// null - can not be determined

	await archive.usePassword(pass);

	let obj = await archive.extractFiles(cb);
	// // outputs
	// {
	// 	".gitignore": { File },
	// 	"addon": {
	// 		"addon.py": { File },
	// 		"addon.xml": { File }
	// 	},
	// 	"README.md": { File }
	// }
	await archive.getFilesObject();
	// // outputs
	// {
	//     ".gitignore": {CompressedFile},
	//     "addon": {
	//         "addon.py": {CompressedFile},
	//         "addon.xml": {CompressedFile}
	//     },
	//     "README.md": {CompressedFile}
	// }

	await archive.getFilesArray();
	// // outputs
	// [
	//     {file: {CompressedFile}, path: ""},
	//     {file: {CompressedFile},   path: "addon/"},
	//     {file: {CompressedFile},  path: "addon/"},
	//     {file: {CompressedFile},  path: ""}
	// ]
}


if (!isBrowser()) {

	module.exports.iscompressed = iscompressed;
	module.exports.verifycompressed = verifycompressed;
	module.exports.compress = compressNode;
	module.exports.decompress = decompressNode;
	module.exports.setExtension = setExtension;
	module.exports.getExtension = getExtension;
	module.exports.zip = require("./exec.unzip").zip;
	module.exports.unzip = require("./exec.unzip").unzip;

	module.exports.default = {
		verifycompressed,
		iscompressed,
		compress,
		decompress,
		setExtension,
		getExtension
	};

}


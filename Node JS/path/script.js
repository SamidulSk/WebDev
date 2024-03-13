const { CONNREFUSED } = require("dns");
const path= require("path");
// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);

const filePath1='\public_html\home\index.html';
const currfilepath=__filename;
// console.log(currfilepath);
// console.log(__dirname);

let result=path.basename(currfilepath);
console.log(result)

let result2=path.basename(currfilepath,'.js');
console.log(result2)

let dirName=path.dirname(currfilepath);
console.log(dirName);

console.log(path.extname('index.md.txt.js'))

// combine directory and base
let pathTofile= path.format( {
    dir: '\public_html\home',
    base:'index.html'
});
console.log(pathTofile)

console.log(path.isAbsolute(currfilepath));
console.log(path.isAbsolute('./index.js'));
console.log(path.join('/home','js','dist','index.js'));
console.log(path.parse(currfilepath));

console.log(path.relative('/home/user/config','/home/user/js'));

console.log(path.resolve())
console.log(path.normalize('//home//user/////js'))
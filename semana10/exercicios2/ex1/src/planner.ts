import * as fs from 'fs';

const file: string = process.argv[2];
const task: string = process.argv[3];

fs.appendFileSync(file, '\n' + task); 
console.log(fs.readFileSync(file,'utf8'));
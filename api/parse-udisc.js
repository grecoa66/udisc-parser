#!/usr/bin/env node

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const CVSParser = require('./CSVParser');

const parseUdisc = async () => {
   const result =  CVSParser.parseCsv(argv.fileInput);
   console.log('result:', JSON.stringify(result, null, 2));
} 


parseUdisc();
#!/usr/bin/env node

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const csvParser = require("csvtojson");

console.log('File Path', argv.inputFile);
const parseUdisc = async () => { 
  const result =  await csvParser().fromFile(argv.inputFile);
  
  console.log('Records: ', JSON.stringify(result, null, 2));
}

parseUdisc();


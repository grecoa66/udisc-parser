#!/usr/bin/env node

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const parse = require("csv-parse");
const fs = require('fs')

const output = [];

console.log('Input File:', argv.inputFile);

fs.readFile(argv.inputFile, 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  
  console.log('CSV data: ', data);
  
  parseRecords(data);
});

const parseRecords = (csvData) => {

  parse(csvData, {
    columns: true,
    skip_empty_lines: true
  }).on('readable', function(){
  let record;
  while (record = this.read()) {
    output.push(record)
  }
})

  console.log('Records: ', output);
}


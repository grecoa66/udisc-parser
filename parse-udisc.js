#!/usr/bin/env node

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const csvParser = require("csvtojson");


const parseUdisc = async () => { 
  const result = await csvParser().fromFile('udisc_scorecards.csv'); 
  
  return result;
}

exports.parseUdisc = parseUdisc;

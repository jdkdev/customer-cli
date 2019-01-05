#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const {
    pwd,
} = require('./vessel');

const docker = require('./docker');

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address'
  }
];

program 
  .version('1.0.0', '-v, --version')
  .description('Client Management System')

// List Command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => getList());

program
    .command('pwd').alias('p')
    .description('print working directory')
    .action(() => pwd());

program
    .command('start').alias('sta')
    .description('start docker')
    .action(() => docker.start());

program
    .command('stop').alias('sto')
    .description('stop docker')
    .action(() => docker.stop());

program.parse(process.argv);

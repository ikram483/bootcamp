

import chalk from 'chalk';

console.log(chalk.blue('Hello, world!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bgWhite('Error occurred!'));
console.log(chalk.yellow.italic('Warning: Low battery'));

const customMessage = chalk.bgMagenta.white.bold('  Welcome to Chalk World!  ');
console.log(customMessage);

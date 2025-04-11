import chalk from 'chalk';

export function showColorfulMessage() {
  console.log(chalk.bold.bgBlue.white(' This is a colorful message using Chalk!'));
}

import chalk from 'chalk';
import * as Diff from 'diff';

const one = 'beep boop ';
const other = '\nbeep boob blah\t';

const diff = Diff.diffChars(one, other);

diff.forEach((part, index) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added
    ? chalk.bgGreen
    : part.removed
      ? chalk.bgRed
      : (x) => x; // identity function, return with normal color
  const coloredText = color(part.value);
  process.stderr.write(coloredText);
});

console.log();

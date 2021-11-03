const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function removeDuplicates(listOfNumbers) {
  return Array.from(new Set(listOfNumbers));
}

rl.on('line', function(line) {
  console.log(
    JSON.stringify(
      removeDuplicates(JSON.parse(line))))
})
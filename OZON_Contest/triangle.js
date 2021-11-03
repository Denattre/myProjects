function pascalTriangle(numRows) {
  let triangle = new Array(numRows);

	for (let i = 0; i < numRows+1; i+=1) {
		let row = new Array(i+1);
		row[0] = 1;
		row[row.length - 1] = 1;

		for (let j = 1; j < row.length - 1; j+=1) {
			let previousRow = triangle[i - 1];
			row[j] = previousRow[j] + previousRow[j-1];
		}
		triangle[i] = row;
	}
	let result = triangle[numRows];
	return result;
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', function(line) {
  console.log(
    JSON.stringify(
      pascalTriangle(JSON.parse(line))))
})
function rotateMatrix(matrix) {
  let length = matrix.length;

	for (let i = 0; i < length / 2; i+=1) {
    for (let j = i; j < length - i - 1; j += 1) {
        let buf=matrix[i][j];

        matrix[i][j]=matrix[length-j-1][i];
        matrix[length-j-1][i]=matrix[length-i-1][length-j-1];
        matrix[length-i-1][length-j-1]=matrix[j][length-i-1];
        matrix[j][length-i-1]=buf;
    }
  }
  
  return matrix;
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
      rotateMatrix(JSON.parse(line))))
})




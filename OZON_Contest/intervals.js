function mergeIntervals(intervals) {
  if (intervals.length === 1) return intervals;
  if (intervals.length === 0) return null;
  
  let currentInterval = intervals[0];
  const result = [currentInterval];

  for (let i = 1; i < intervals.length; i+=1) {
    const currentEnd = currentInterval[1];
    const [nextIntervalStart, nextIntervalEnd] = intervals[i];
    if (currentEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentEnd, nextIntervalEnd);
    } else {
      result.push(intervals[i]);
      currentInterval=intervals[i];
    }
  }

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
        mergeIntervals(JSON.parse(line))))
})




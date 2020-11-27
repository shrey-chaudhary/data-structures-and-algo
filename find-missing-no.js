let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
let input = [];
readline.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        readline.close();
        input = input.map(line => line.split(' ').map(val => parseInt(val)));
        let n = input[0][0];
        let arr = input[1];
        let sum = n * (n + 1) / 2;
        let missingSum = 0;
        for (let i = 0; i < arr.length; i++) {
            missingSum += arr[i];
        }
        console.log(sum - missingSum);
    }
})
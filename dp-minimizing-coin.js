let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
let input = [];
readline.on('line', line => {
    input.push(line);
    if (input.length === 2) {
        readline.close();
        input = input.map(line => line.split(' ').map(val => parseInt(val)));
        let n = input[0][0];
        let x = input[0][1];
        let coins = input[1];
        let dp = Array.from(Array(x + 1), () => Infinity);
        dp[0] = 0;
        for (let i = 1; i <= x; i++) {
            for (let j = 0; j < n; j++) {
                if (coins[j] <= i) {
                    let t = dp[i - coins[j]] + 1;
                    if (t < dp[i]) {
                        dp[i] = t;
                    };
                }
            }
        }
        console.log(dp[x] === Infinity ? -1 : dp[x]);
    }
});
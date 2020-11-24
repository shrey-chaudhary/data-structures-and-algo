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
        let x = input[0][1];
        let coins = input[1];
        let dp = Array.from(Array(x + 1), () => 0);
        let mod = 10 ** 9 + 7;
        dp[0] = 1;
        for (let i = 1; i <= x; i++) {
            for (let j = 0; j < n; j++) {
                if (coins[j] <= i) {
                    dp[i] = (dp[i - coins[j]] + dp[i]) % mod;
                }
            }
        }
        console.log(dp[x]);
    }
})
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
        let dp = Array.from(Array(n + 1), () => Array.from(Array(x + 1), () => 0));
        let mod = 10 ** 9 + 7;
        for (let i = 0; i <= n; i++) {
            // console.log(i)
            dp[i][0] = 1;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= x; j++) {

                if (coins[i - 1] <= j) {
                    dp[i][j] = (dp[i][j - coins[i - 1]] + dp[i - 1][j]) % mod;
                }
            }
        }
        for (let i = 0; i <= n; i++) {
            console.log(dp[i])
        }
        console.log(dp);
    }
})
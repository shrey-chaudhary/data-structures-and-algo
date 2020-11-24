let readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

readLine.on('line', (line) => {
    let S = parseInt(line);
    if (!isNaN(S)) {
        let dp = Array.from(Array(S + 1), () => 0)
        dp[0] = 1;

        const mod = 10 ** 9 + 7;
        for (let i = 1; i <= S; i++) {
            for (let j = 1; j <= 6; j++) {
                if (j <= i) {
                    dp[i] = (dp[i] + dp[i - j]) % mod;
                }
            }
        }
        console.log(dp[S]);
        readLine.close();
    }
})
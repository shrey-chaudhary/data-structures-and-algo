let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
readline.on('line', (line) => {
    readline.close();
    let n = parseInt(line.trim());
    let output = n + ' ';

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        output += n + ' ';
    }
    console.log(output);
})
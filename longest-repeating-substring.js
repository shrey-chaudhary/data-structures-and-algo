let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
let input = [];
readline.on('line', (line) => {
    input.push(line);
    if (input.length === 1) {
        readline.close();
        if (!line) {
            console.log(0);
            return;
        }
        const chars = line.trim().split('');
        let max = 1;
        let currSubStrLen = 1;
        let currChr = chars[0];
        for (let i = 1; i < chars.length; i++) {
            if (currChr === chars[i]) {
                currSubStrLen++
            } else {
                currChr = chars[i];

                currSubStrLen = 1;
            }
            max = currSubStrLen > max ? currSubStrLen : max;
        }
        console.log(max)
    }
})
const chalk = require("chalk");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateText(text, speed = 100, colorFn = chalk.white, hasRepeatingLetters = false) {
    if (hasRepeatingLetters) {
        for (let i = 0; i < text.length; i++) {
            process.stdout.write(colorFn(text[i]));
            await sleep(speed);
        }
    } else {
        const words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                process.stdout.write(colorFn(word[j]));
                await sleep(speed);
            }
            if (i < words.length - 1) {
                process.stdout.write(colorFn(' '));
                await sleep(speed);
            }
        }
    }
    process.stdout.write('\n');
}

// Fungsi utama mutar lirik
async function lagu() {
    const lyrics = [
        { text: "Aku mau cari jalan tengah", delay: 100, speed: 45 },
        { text: "Buat kamu, apa yang ga bisa?", delay: 120, speed: 50 },
        { text: "Ajak kamu ke angkasa", delay: 150, speed: 70 },
        { text: "Go to the moon, kita berdansa\n", delay: 150, speed: 50 },
        { text: "Aku wish you best", delay: 200, speed: 35 },
        { text: "Kamu yang the best", delay: 500, speed: 85 },
        { text: "Kata mamaku", delay: 500, speed: 65 },
        { text: "Masih muda, banyak waktu\n", delay: 500, speed: 70 },
        { text: "Ku merasakan apa yang kaurasakan", delay: 750, speed: 80 },
        { text: "Tanpa ragu, kubilang kamu yang paling paham aku", delay: 760, speed: 50 }
    ];

    for (let i = 0; i < lyrics.length; i++) {
        const line = lyrics[i];
        const colorFn = (i % 2 === 0) ? chalk.cyanBright : chalk.whiteBright;
        await sleep(line.delay);
        await animateText(line.text, line.speed, colorFn, line.hasRepeatingLetters);
    }
}

lagu();

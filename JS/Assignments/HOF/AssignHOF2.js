//generate a random number after 3s

function redGenerator() {
    let redNum = Math.floor(Math.random() * 100)
    return redNum;
}

function generateRandomNumberWithDelay(Second) {
    console.log(`Generating a random number after a delay of ${Second} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = redGenerator();
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);
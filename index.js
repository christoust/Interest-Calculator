import { calculateInterest } from './interestCalculator.js';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateAndPrintInterest = async () => {
    try {
        rl.question('Enter the principal amount: ', async (principal) => {
            rl.question('Enter the time in years: ', async (time) => {
                const rate = .05; 
                const interest = await calculateInterest(principal, rate, time);
                console.log(`Interest: ${interest}`);
                rl.close();
            });
        });
    } catch (error) {
        console.error(error.message);
    }
};

calculateAndPrintInterest();

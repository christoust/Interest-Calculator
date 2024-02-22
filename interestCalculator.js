const calculateInterest = (principal, rate, time) => {
    return new Promise((resolve, reject) => {
        if (principal <= 0 || rate <= 0 || time <= 0) {
            reject(new Error('Invalid input. Principal, rate, and time must be greater than zero.'));
        }

        const interest = (principal * rate * time) / 100;
        resolve(interest);
    });
};

export { calculateInterest };

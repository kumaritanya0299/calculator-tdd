class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = /,|\n/; // Default delimiters: comma or newline
        if (numbers.startsWith("//")) {
            delimiter = new RegExp(numbers[2]);
            numbers = numbers.slice(4);
        }

        let numsArray = numbers.split(delimiter);
        let sum = 0;
        let negativeNumbers = [];

        numsArray.forEach(numStr => {
            let num = parseInt(numStr, 10);
            if (num < 0) {
                negativeNumbers.push(num);
            } else {
                sum += num;
            }
        });

        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return sum;
    }
}

module.exports = StringCalculator;
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return 1 for a single number "1"', () => {
        expect(calculator.add("1")).toBe(1);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(calculator.add("1,5")).toBe(6);
    });

    test('should return the sum for numbers separated by commas or newlines', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('should handle custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('should throw an error if a negative number is included', () => {
        expect(() => calculator.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
});
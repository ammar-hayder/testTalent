export function sum(numbers: string): number {
    // case 1st code 
    if (numbers === "") return 0;

    let delimiter = /,|\n/; 
    let numString = numbers;

    // case 2, 3, 4thcode 
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // escape special characters in delimiter
        numString = numbers.substring(delimiterEndIndex + 1);
    }

    
    const numberArray = numString.split(delimiter);

    // case 5th
    const parsedNumbers = numberArray.map(Number);
    const negativeNumbers = parsedNumbers.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }

    // Sum up the numbers
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
}


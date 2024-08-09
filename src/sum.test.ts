import { sum } from './sum';

describe('sum function', () => {
    it('should return 0 if input string is empty', () => {
        expect(sum("")).toBe(0);
    });
    it('should return sum of comma separated string', () => {
        expect(sum("2,3,4")).toBe(9);
    });
    it('should return sum of comma separated string of large number', () => {
        expect(sum("2,3,678,637363,")).toBe(638046);
    });
    it('should return the correct sum of comma separated string with NEW Line', () => {
        expect(sum("1\n2,3")).toBe(6);
    });
   

    it('should return the correct sum of string with different delimiters', () => {
        expect(sum("//;\n1;2")).toBe(3);
        expect(sum("//|\n1|2|3")).toBe(6);
    });


    it('should throw an exception for negative numbers', () => {
        expect(() => sum("1,-2,3")).toThrow("negative numbers not allowed -2");
    });

    it('should list all negative numbers in the exception message', () => {
        expect(() => sum("1,-2,-3,4")).toThrow("negative numbers not allowed -2, -3");
    });
});

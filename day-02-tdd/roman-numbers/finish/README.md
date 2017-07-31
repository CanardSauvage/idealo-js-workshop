
```
> npm init
> npm install --save-dev jasmine
> npm install --save-dev karma karma-chrome-launcher karma-jasmine
```
   it("should work with all test cases", function () {
        expect(roman("IX")).toBe("9");
        expect(roman("XLII")).toBe("42");
        expect(roman("XCIX")).toBe("99");
        expect(roman("MMXIII")).toBe("2013");

        // 1999 special - In theory that allows eight different ways of depicting 1999 
        expect(roman("MCMXCIX")).toBe("1999");
        expect(roman("MCMXCVIIII")).toBe("1999");
        expect(roman("MCMLXXXXIX")).toBe("1999");
        expect(roman("MCMLXXXXVIIII")).toBe("1999");

        expect(roman("MDCCCCXCIX")).toBe("1999");
        expect(roman("MDCCCCXCVIIII")).toBe("1999");
        expect(roman("MDCCCCLXXXXIX")).toBe("1999");
        expect(roman("MDCCCCLXXXXVIIII")).toBe("1999");
    });

describe("Roman Number converter tests", function () {

   it("should convert I to 1", function () {
       expect(roman("I")).toBe("1");
   });
});
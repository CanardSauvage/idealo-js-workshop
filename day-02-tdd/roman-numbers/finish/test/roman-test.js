describe("Roman Number converter tests", function () {

    it("should convert I to 1", function () {
        expect(roman("I")).toBe("1");
    });

    it("should convert V to 5", function () {
        expect(roman("V")).toBe("5");
    });

    it("should convert X to 10", function () {
        expect(roman("X")).toBe("10");
    });

    it("should convert L to 50", function () {
        expect(roman("L")).toBe("50");
    });

    it("should convert C to 100", function () {
        expect(roman("C")).toBe("100");
    });

    it("should convert D to 500", function () {
        expect(roman("D")).toBe("500");
    });

    it("should convert M to 1000", function () {
        expect(roman("M")).toBe("1000");
    });

    it("should add each number", function () {
        expect(roman("VI")).toBe("6");
    });

    it("should substract a number if the next number is bigger", function () {
        expect(roman("IV")).toBe("4");
    });

    it("should work with all test cases", function () {
        expect(roman("IX")).toBe("9");
        expect(roman("XLII")).toBe("42");
        expect(roman("XCIX")).toBe("99");
        expect(roman("MMXIII")).toBe("2013");

        // 1999 special - In theory that allows eight different ways of depicting 1999?
        expect(roman("MCMXCIX")).toBe("1999");
        expect(roman("MCMXCVIIII")).toBe("1999");
        expect(roman("MCMLXXXXIX")).toBe("1999");
        expect(roman("MCMLXXXXVIIII")).toBe("1999");

        expect(roman("MDCCCCXCIX")).toBe("1999");
        expect(roman("MDCCCCXCVIIII")).toBe("1999");
        expect(roman("MDCCCCLXXXXIX")).toBe("1999");
        expect(roman("MDCCCCLXXXXVIIII")).toBe("1999");
    });
});
# Roman numbers kata

## Task

Write a function, which takes a string with roman numbers and converts it to a string with arabic numbers.
```
var a = roman("IV");
assertTrue(a === "4") 
```

## Roman numbers

The Romans wrote numbers using letters : I, V, X, L, C, D, M.

| Roman | Arabic  |
|-------|---------|
| I     | 1       |
| V     | 5       |
| X     | 1       |
| L     | 50      |
| C     | 100     |
| D     | 500     |
| M     | 1000    |

## Basic rules
* Symbols add to each other
* Symbols substract if the next number is bigger

## Examples
* 3 = III
* 4 = IV
* 12 = XII
* 13 = XIII
* 1954 = MCMLIV
* 2014 = MMXIV

## Some more details, which are irrelvant
* The same symbol can only used 3 times in a row
* Only a small-value symbol may be subtracted from any large-value symbol.
* I placed before V or X indicates one less, so four is IV (one less than five) and nine is IX (one less than ten)
* X placed before L or C indicates ten less, so forty is XL (ten less than fifty) and ninety is XC (ten less than a hundred)
* C placed before D or M indicates a hundred less, so four hundred is CD (a hundred less than five hundred) and nine hundred is CM (a hundred less than a thousand)

    it("should work with all test cases", function () {
        expect(roman("IX")).toBe("9");
        expect(roman("XLII")).toBe("42");
        expect(roman("XCIX")).toBe("99");
        expect(roman("MMXIII")).toBe("2013");

        // 1999 special case - In theory that allows eight different ways of depicting 1999?
        expect(roman("MCMXCIX")).toBe("1999");
        expect(roman("MCMXCVIIII")).toBe("1999");
        expect(roman("MCMLXXXXIX")).toBe("1999");
        expect(roman("MCMLXXXXVIIII")).toBe("1999");

        expect(roman("MDCCCCXCIX")).toBe("1999");
        expect(roman("MDCCCCXCVIIII")).toBe("1999");
        expect(roman("MDCCCCLXXXXIX")).toBe("1999");
        expect(roman("MDCCCCLXXXXVIIII")).toBe("1999");
    });
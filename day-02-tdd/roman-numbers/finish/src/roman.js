function roman(romanNumber) {
    var chars = romanNumber.split('');
    var result = 0;
    for (var i = 0; i < chars.length; i++) {
        var valueOfDigit = convertSingleDigit(chars[i]);
        var valueOfNextDigit = convertSingleDigit(chars[i + 1]);
        if (valueOfDigit < valueOfNextDigit) {
            result -= valueOfDigit;
        } else {
            result += valueOfDigit;
        }
    }

    return "" + result;
}

function convertSingleDigit(romanNumber) {
    switch (romanNumber) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}

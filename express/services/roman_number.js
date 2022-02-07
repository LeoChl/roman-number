const { ROMANS_NUMERALS } = require("../constants/roman_number");

function convertNumberToRoman(number) {
    let romanNumber = '';

    for (const i of Object.keys(ROMANS_NUMERALS)) {
        const roundedQuotient = Math.floor(number / ROMANS_NUMERALS[i]);
        number -= roundedQuotient * ROMANS_NUMERALS[i];
        romanNumber += i.repeat(roundedQuotient);
    }

    return romanNumber;
}

function isNumeric(number) {
    if (typeof number === "string") {
        return false;
    }

    return !isNaN(parseFloat(number));
}

function isWithinRange(number) {
    return Math.sign(number) && (0 < number && number <= 100);
}

module.exports = {
    convertNumberToRoman,
    isNumeric,
    isWithinRange
};

/* Roman Numeral Converter */
/* Convert the given number into a roman numeral. */
/* All roman numerals in upper-case. */

/* START: test */
let testConvertToRomans = () => {
    convertToRoman(2); // should return "II".
    convertToRoman(3); // should return "III".
    convertToRoman(4); // should return "IV".
    convertToRoman(5); // should return "V".
    convertToRoman(9); // should return "IX".
    convertToRoman(12); // should return "XII".
    convertToRoman(16); // should return "XVI".
    convertToRoman(29); // should return "XXIX".
    convertToRoman(44); // should return "XLIV".
    convertToRoman(45); // should return "XLV"
    convertToRoman(68); // should return "LXVIII"
    convertToRoman(83); // should return "LXXXIII"
    convertToRoman(97); // should return "XCVII"
    convertToRoman(99); // should return "XCIX"
    convertToRoman(400); // should return "CD"
    convertToRoman(500); // should return "D"
    convertToRoman(501); // should return "DI"
    convertToRoman(649); // should return "DCXLIX"
    convertToRoman(798); // should return "DCCXCVIII"
    convertToRoman(891); // should return "DCCCXCI"
    convertToRoman(1000); // should return "M"
    convertToRoman(1004); // should return "MIV"
    convertToRoman(1006); // should return "MVI"
    convertToRoman(1023); // should return "MXXIII"
    convertToRoman(2014); // should return "MMXIV"
    convertToRoman(3999); // should return "MMMCMXCIX"
}
/* END: test */

let romanOne = "I";
let romanFive = "V";
let romanTen = "X";
let romanFifty = "L";
let romanHundred = "C";
let romanFiveHundred = "D";
let romanThousand = "M";
let romanNumeral = "";

let digitsToRoman = (magnitude, digit) => {
    let one = "";
    let five = "";
    let ten = "";
    if (magnitude == 1) {
        one = romanOne;
        five = romanFive;
        ten = romanTen;
    } else if (magnitude == 10) {
        one = romanTen;
        five = romanFifty;
        ten = romanHundred;
    } else if (magnitude == 100) {
        one = romanHundred;
        five = romanFiveHundred;
        ten = romanThousand;
    } else if (magnitude == 1000) {
        one = romanThousand;
        five = "?";
        ten = "!";
    }
    switch(digit) {
        case 1: return one;
        case 2: return one + one;
        case 3: return one + one + one;
        case 4: return one + five;
        case 5: return five;
        case 6: return five + one;
        case 7: return five + one + one;
        case 8: return five + one + one + one;
        case 9: return one + ten;
        default: return '';
    }
};

function convertToRoman(num) {
    let digit = null;
    let ones = null;
    let tens = null;
    let magnitude = 0;
    if (num>0 && num<10) {
        magnitude = 1;
        ones = num;
        romanNumeral = digitsToRoman(magnitude, ones);
    }
    if (num>9 && num<100) {
        magnitude = 10;
        tens = Number(num.toString().split("").shift());
        romanNumeral = digitsToRoman(magnitude, tens);
        ones = Number(num.toString().split("").pop());
        magnitude = 1;
        romanNumeral += digitsToRoman(magnitude, ones)
    }
    if (num>99 && num<1000) {
        magnitude = 100;
        hundreds = Number(num.toString().split("").shift());
        romanNumeral = digitsToRoman(magnitude, hundreds);
        magnitude = 10;
        let numArray = num.toString().split("");
        tens = Number(numArray[1]);
        romanNumeral += digitsToRoman(magnitude, tens);
        ones = Number(num.toString().split("").pop());
        magnitude = 1;
        romanNumeral += digitsToRoman(magnitude, ones)
    }
    if (num>999 && num<4000) {
        let numArray = num.toString().split("");
        magnitude = 1000;
        thousands = Number(num.toString().split("").shift());
        romanNumeral = digitsToRoman(magnitude, thousands);
        magnitude = 100;
        hundreds = Number(numArray[1]);
        romanNumeral += digitsToRoman(magnitude, hundreds);
        magnitude = 10;
        tens = Number(numArray[2]);
        romanNumeral += digitsToRoman(magnitude, tens);
        ones = Number(num.toString().split("").pop());
        magnitude = 1;
        romanNumeral += digitsToRoman(magnitude, ones)
    }
    
    console.log(num + ": " + romanNumeral);
    return romanNumeral;
};

convertToRoman(36);

// testConvertToRomans();
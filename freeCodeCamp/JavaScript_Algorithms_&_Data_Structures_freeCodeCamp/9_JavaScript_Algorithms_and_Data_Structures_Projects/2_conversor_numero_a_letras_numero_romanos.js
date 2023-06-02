/*
Convertidor de números romanos

Convierte el número dado en un número romano.

Todas las respuestas en números romanos deben proporcionarse en mayúsculas.

números romanos	    números arábigos
METRO	            1000
CM              	900
D	                500
CD	                400
C	                100
XC	                90
L	                50
SG	                40
X	                10
IX	                9
V	                5
IV	                4
I	                1

function convertToRoman(num) {
 return num;
}

convertToRoman(36);
*/

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}

// Test
console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(5)); // V
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(12)); // XII
console.log(convertToRoman(16)); // XVI
console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(45)); // XLV
console.log(convertToRoman(68)); // LXVIII
console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(97)); // XCVII
console.log(convertToRoman(99)); // XCIX
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(500)); // D
console.log(convertToRoman(501)); // DI
console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(891)); // DCCCXCI
console.log(convertToRoman(1000)); // M
console.log(convertToRoman(1004)); // MIV
console.log(convertToRoman(1006)); // MVI
console.log(convertToRoman(1023)); // MXXIII
console.log(convertToRoman(2014)); // MMXIV
console.log(convertToRoman(3999)); // MMMCMXCIX

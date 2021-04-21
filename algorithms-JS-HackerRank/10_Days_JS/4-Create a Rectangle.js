'use strict';

a = 4
b = 5


/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
            length: a,
            width: b,
            perimeter: (2*a) + (2*b),
            area: (a*b)
        }
}

Rectangle(a, b) // {length: 4, width: 5, perimeter: 18, area: 20}

'use strict';

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

//Option One
function isPositive(a) {
    if(a > 0){
        return 'YES';
    }
    else{
        throw (a === 0 ? new Error('Zero Error') : new Error('Negative Error'));
    }
}

a = 1

console.log(isPositive(a))

//Option two

function isPositive(a) {
    if (a > 0) { return "YES" };
    throw Error (a ? "Negative Error" : "Zero Error");
}

a = 1

console.log(isPositive(a))

//Option three

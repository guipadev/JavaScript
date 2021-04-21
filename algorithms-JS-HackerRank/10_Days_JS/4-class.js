s="1234"

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

//Option #1
function reverseString(s) {
    try{
       var a = s.split("").reverse().join("");
       console.log(a);
   } catch(e)
       {
           console.log(e.message);
           console.log(s);
       }
}

//Option #2
function reverseString2(s) {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

//Ejecute functions

reverseString(s)    //4321
reverseString2(s) //4321
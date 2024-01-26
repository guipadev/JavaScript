// Opción 1
function areAnagrams(word1, word2) {
    let removeSpacesAndToLower = function(str) {
        let result = '';

        for (const element of str) {
            if (element !== '') {
                result += element.toLowerCase();
            }
        }

        return result;
    };

    let sortString = function(str) {
        return removeSpacesAndToLower(str).split("").sort().join("");
    }

    return sortString(word1) === sortString(word2);
}

console.log(areAnagrams('hello', 'olleh')) // true
console.log(areAnagrams('hello', 'ollehu')) // false

// Opción 2
function areAnagrams2(word1, word2) {
    
    if (word1.length !== word2.length) {
        return false;
    }

    let letterCount = {};

    for (const char of word1) {
        let lowerChar = char.toLowerCase();

        letterCount[lowerChar] = (letterCount[lowerChar] || 0) + 1;
    }

    for (const char of word2) {
        let lowerChar = char.toLowerCase();

        if (!letterCount[lowerChar]){
            return false;
        }
        letterCount[lowerChar]--;
    }
    return true;
}

console.log(areAnagrams2('hello', 'olleh')) // true
console.log(areAnagrams2('hello', 'ollehu')) // false

// Opción 3
const hashMap = (string) => {
    let mappedObj = {};

    for (let i of string) {
        if (mappedObj[i] === undefined) mappedObj[i] = 1;
        else mappedObj[i] += 1;
    }
    return mappedObj;
}

const checkAnagram = (string1, string2) => {
    if (string1.length !== string2.length) return false;

    let obj1 = hashMap(string1);
    let obj2 = hashMap(string2);

    for (let key in obj1) {
        if (obj2[key] !== obj1[key]) return false;
    }

    return true;
}
console.log(checkAnagram('hello', 'olleh')) // true
console.log(checkAnagram('hello', 'ollehu')) // false

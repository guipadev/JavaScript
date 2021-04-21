'use strict';

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let maxNumber = Math.max.apply(null, nums);
    let secondLargestNumber;
    let removeFirstLargestValue = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxNumber) {
            removeFirstLargestValue.push(nums[i]);
        }
    }
    secondLargestNumber = Math.max.apply(null, removeFirstLargestValue);
    return secondLargestNumber;
}

nums = [2,3,6,6,5]

console.log(getSecondLargest(nums));    //5

//OPTION TWO

nums = [2,3,6,6,5]

function getSecondLargest2(nums) {

    const max = Math.max(...nums)

    return Math.max(...nums.filter(x => x !== max))

}

console.log(getSecondLargest(nums));    //5

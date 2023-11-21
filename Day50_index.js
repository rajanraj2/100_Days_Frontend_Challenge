// Link to problem :
// https://codedamn.com/problem/MU-_aZRO0_s1UCndepGkj?challengeList=100-days-of-frontend

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
    let distance = 0;

    for (const num1 of arr1) {
        let isValid = true;

        for (const num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            distance++;
        }
    }

    return distance;
};

export { findTheDistanceValue };

// Sample Tests
console.log(findTheDistanceValue([4, 5, 8], [1, 2, 3], 3)); // Expected Output: 1
console.log(findTheDistanceValue([1, 4, 5, 6], [10, 12, 15], 5)); // Expected Output: 2
console.log(findTheDistanceValue([2, 3, 4], [3, 4, 5], 1)); // Expected Output: 0

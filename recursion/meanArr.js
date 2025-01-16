let arr = [1, 2, 3, 4, 5];

let sum = 0;
let len = arr.length;

function findSum(sum, arr, index) {
    if (index < 0) {
        return 0
    }

    return sum + arr[index] + findSum(sum, arr, index - 1)
}

let totalSum = findSum(sum, arr, len - 1)

let mean = totalSum / len;

console.log(mean, totalSum);

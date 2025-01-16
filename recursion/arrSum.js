let arr = [1, 2, 3, 4, 5]


function findSum (arr, n){
    if(n <= 0){
        return 0
    }

    return arr[n-1] + findSum(arr, n-1)
}

let arrSum = findSum(arr, arr.length);


console.log(arrSum, "arrSum")
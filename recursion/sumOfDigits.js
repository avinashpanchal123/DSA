let num = 123456;

function sumOfDigits(n){
    if(n <= 0){
        return 0
    }

    return n % 10 + sumOfDigits(Math.floor(n/10))
}

let output = sumOfDigits(num);
console.log(output)
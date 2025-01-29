n = 5;

function nNaturalSum(n , sum){
    console.log(n, sum)
    if(n <= 0){
        return 0
    }
    return nNaturalSum(n-1, sum+n)
}
let temp = nNaturalSum(n, 0);

console.log(temp)
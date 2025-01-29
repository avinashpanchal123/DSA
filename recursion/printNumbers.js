let n = 100

function printNos(n){
    if(n > 0){
        printNos(n-1);
        console.log(n)
    }
    return;
}


printNos(n)
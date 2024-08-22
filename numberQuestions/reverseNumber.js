let num = 123456789
let output = 0;
while(num > 0){
    output = (output * 10)  + (num % 10);
    num = Math.floor(num / 10);
}

console.log(output)
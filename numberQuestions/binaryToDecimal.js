let binary = '111';

let index = 0;
let decimal = 0;
for ( let i = binary.length - 1; i >= 0; i--){
    if(binary[index] == '1'){
        decimal = decimal + 2**index;
    }
    index++
}

console.log(decimal)
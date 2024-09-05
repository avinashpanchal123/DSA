
let s = "(1+(4+5+2)-3)+(6+8)";
// let s = "1 + 1";
// let s = " 2-1 + 2 "

var calculate = function(s) {
    let stack = [];
    // let top = -1;

    for ( let i = 0; i < s.length; i++){
        if(s[i] != " "){
            if(s[i] == ")"){
                let exp = ""
                while(stack[stack.length-1] != "("){
                    exp = stack[stack.length-1] + exp;
                    stack.pop();
                }
                stack.pop()
                console.log(exp)
                let ouput = (evalExp(exp.split("")));
                console.log(ouput)
                stack.push(ouput+"")
                //  exp = eval(exp)
                // stack.push(exp)
            }
            else{
                stack.push(s[i]);
            }
        }
    }
    console.log(stack, 'stack_print')
    let ans = evalExp(stack);
    console.log(ans)
};


// calculate(s)

function evalExp(exp){
    // let sum = 0;
    let sign = "+"
    let sum = 0
    let digit1 = "";
    let digit2 = ""
    for ( let i = 0; i < exp.length; i++){
        if(digit1 == "" && exp[i] != "+" && exp[i] != "-"){
            digit1 = digit1 + exp[i]
        }
        else if(exp[i] == "-"){
            if(sum == 0){
                sum = sum + Number(digit1);
                digit1 = ""
            }
            sign = "-"
        }
        

        
        
        // if(exp[i] == "-"){
        //     sign = "-"
        // }
      
        // if(sign == "-" && exp[i] != "-" && exp[i] != "+"){
        //     sum = sum - Number(exp[i]);
        //     sign = "+"
        // }
        // else if(exp[i] != "-" && exp[i] != "+"){
        //     sum = sum + Number(exp[i])
        // }
    }
    console.log(sum);
}


evalExp("1+11-3")

// calculate(s);


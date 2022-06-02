
function fibSequence(){
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    
    for(let i = 0; i < 5; i++){
        console.log(num2);
        num3 = num2;
        num2 += num1;
        num1 = num3;
    }
}

console.log(fibSequence());

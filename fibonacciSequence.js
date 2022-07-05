// function that prints the first ten digits of the fibonacci sequence
function fibSequence(){

/* num2 temporarily holds a number of the fib sequence, num1 is used to store the sum of num2 
and num1 and turn to num3, and num3 to become num2, or the next number of the sequence.
*/

    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    
    // loops to print out the first ten numbers of the fib sequence.
    for(let i = 0; i < 10; i++){
        console.log(num2);
        num3 = num2;
        num2 += num1;
        num1 = num3;
    }
}


// executes function
console.log(fibSequence());

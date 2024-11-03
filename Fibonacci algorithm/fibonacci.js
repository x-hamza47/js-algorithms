//Info: Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it.

function fibonacci(n) {
    const fib = [0,1];
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(7));

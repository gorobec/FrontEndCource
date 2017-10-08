function fibonacci(number) {
    let fiboA = 0;
    let fiboB = 1;
    let fibo;
    let summ = 0;
    do {
        fibo = fiboA + fiboB;
        fiboA = fiboB;
        fiboB = fibo;
        if (fibo % 2 === 0) {
            summ += fibo;
        }
        console.log(fibo);
    } while(summ < number);
    return summ - fibo;
}

console.log(fibonacci(4000000));

/*Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих.
Начиная с 1 и 2, первые 10 элементов будут:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
...
Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.*/

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
            console.log(fibo);
        }
    } while(fibo < number);
    return summ ;
}
// 4613732
console.log(fibonacci(4000000));

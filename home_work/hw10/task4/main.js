/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/


function isPrimeNumber(number) {
    let divider = Math.ceil(Math.sqrt(number));
    for(let i = 2; i <= divider; i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumber(position) {
    if(position === 1) {
        return 2;
    }
    let primeNumber;
    let checkNumber = 3;
    while (position !== 1) {

        if(isPrimeNumber(checkNumber)){
            primeNumber = checkNumber;
            position--;
        }
        checkNumber += 2;
    }
    return primeNumber;
}
// 104743
console.log(findPrimeNumber(10001));
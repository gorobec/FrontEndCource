/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

function isPrimeNumber(number) {
    let divider = Math.ceil(Math.sqrt(number));
    for(let i = 2; i <= divider; i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}


function findSumOfPrimes(number) {
    if (number === 2) {
        return 2;
    }
    let sum = 2;
    for(let i = 3; i < number; i += 2) {
        if(isPrimeNumber(i)){
            sum += i;
        }
    }
    return sum;
}
//142913828922
console.log(findSumOfPrimes(2000000));
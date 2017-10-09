/*Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом?*/

function isPrimeNumber(number) {
    let divider = Math.ceil(Math.sqrt(number));
    for(let i = divider; i >= 2; i--){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function biggestPrimeDivider(number) {

    for(let divider = number; divider >= 1; divider -= 2) {
        if(number % divider === 0 && isPrimeNumber(divider)){
            return divider;
        }
    }
    return 1;
}
// 29
console.log(biggestPrimeDivider(13195));
// 6857
console.log(biggestPrimeDivider(600851475143));
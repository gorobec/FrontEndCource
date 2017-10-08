/*function isPrimeNumber(number) {
    for(let i = number - 1; i > 1; i--){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}*/

function isPrimeNumber(number) {
    let divider = Math.ceil(Math.sqrt(number));
    for(let i = 2; i <= divider; i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function biggestPrimeDivider(number) {

    for(let i = number; i >= 1; i--) {
        let divider = i;
        if(number % divider === 0 && isPrimeNumber(divider)){
            return divider;
        }
    }
    return 1;
}
console.log(biggestPrimeDivider(13195));
console.log(biggestPrimeDivider(600851475143));
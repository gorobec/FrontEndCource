/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function isPalindrom(number) {

    let digits = ("" + number).split("");
    for(let i = 0; i < digits.length; i++){
        if(digits[i] !== digits[digits.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function findPalindrom(value) {
    for(let i = value; i > 0; i--){
        for(let j = value; j > 0; j--){
            let number = i * j;
            if(isPalindrom(number)){
                console.log(i);
                console.log(j);
                return number;
            }
        }
    }
}
// 90909
console.log(findPalindrom(999));
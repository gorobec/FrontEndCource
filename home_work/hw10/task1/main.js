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

console.log(findPalindrom(999));
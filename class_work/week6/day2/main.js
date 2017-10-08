function findMax(value1, value2, value3) {
    if (value1 > value2 && value1 > value3) {
        return value1;
    } else if (value2 > value1 && value2 > value3) {
        return value2;
    }

    return value3;
}

function findMin(numbers) {
    if (!Array.isArray(numbers)){
        return;
    }
    let min = Number.MAX_VALUE;
    for (let num of numbers) {
        if(num < min) {
            min = num;
        }
    }
    return min;
}

console.log(findMax(15, 28, 158));
console.log(findMin([123, 58, 1, 16]));

function isInt(number) {
    return number % 1 === 0;

}

function pow(number, pow) {
    let result = number;
    if(number <= 0 || pow <= 0) {
        alert("Negative number or pow");
        return;
    } else if(!isInt(number) || !isInt(pow)) {
        alert("Number or pow are float");
        return;
    }
    for(let i = 1; i < pow; i++) {
        result *= number;
    }
    return result;
}


console.log(pow(5, 5));




function powRecursion(number, pow) {
    if(number <= 0 || pow <= 0) {
        alert("Negative number or pow");
        return;
    } else if(!isInt(number) || !isInt(pow)) {
        alert("Number or pow are float");
        return;
    }
    if (pow === 1) return number;
    return number * powRecursion(number, pow - 1);
}

console.log(powRecursion(5, 5));

function fibonacci(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(7));

/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function smallestPositiveNumber(number) {

    for(let i = number; i < Number.MAX_VALUE; i += number) {
        for(let j = number; j > 0; j--){
            if(i % j !== 0) {
                break;
            } else if (j === 1){
                return i;
            }
        }
    }
}
//232792560
console.log(smallestPositiveNumber(20));

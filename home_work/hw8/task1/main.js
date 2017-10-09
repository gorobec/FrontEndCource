/*Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9.
Сумма этих чисел - 23.
Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
*/

function findSumOfNumbersDivOn3or5(number) {
    let sum = 0;
    for(let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
// 23
console.log(findSumOfNumbersDivOn3or5(10));
// 233168
console.log(findSumOfNumbersDivOn3or5(1000));
/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

function findPythagoreanC(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function findPythagoreanABC(sum) {
    let checkSum = 0;
    let c = 0;
    for(let a = 1; a < sum; a++) {
        for(let b = 1; b < sum; b++) {
            c =  findPythagoreanC(a, b);
            checkSum = a + b + c;
            if(checkSum > sum) {
                break;
            } else if (checkSum === sum){
                console.log(a);
                console.log(b);
                console.log(c);
                return a * b * c;
            }
        }
    }
    return -1;
}
//31875000
console.log(findPythagoreanABC(1000));
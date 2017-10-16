/*
var arr = "Gosha, Masha, Petja";
arr = arr.split(", ", 2);
console.log(arr);
*/


let array = [8, 5, 9, 89, 0, 11];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function sort(array) {

    if(!Array.isArray(array)) {
        return array;
    }

    let change = true;

    for (let i = array.length - 1; i > 0; i--) {
        if(!change) return;
        change = false;
        for (let j = 0; j < i; j++) {
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                change = true;
            }
        }
    }
}

console.log(array);
sort(array);
console.log(array);


function countSymbols(array) {
    if(!Array.isArray(array)) return ("" + array).length;
    let result = "";

    for (let obj of array) {
        result += obj;
    }

    return result.length;
}

console.log(countSymbols(["Hello", true, 1, null]));

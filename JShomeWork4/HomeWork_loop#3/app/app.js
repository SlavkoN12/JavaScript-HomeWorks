let randomNum = [15, 20, 10, 201, 88, 150, 1945, 332,];

function findMax(array) {
    let max = -Infinity;
    let x = 0;
    while (x < array.length) {
        if (array[x] > max) {
            max = array[x];
        }
        x++;
    }
    return max;
}

function findMin(array) {
    let min = Infinity;
    let x = 0;
    while (x < array.length) {
        if (array[x] < min) {
            min = array[x];
        }
        x++;
    }
    return min;
}

let sum = findMax(randomNum) + findMin(randomNum);

console.log(findMax(randomNum))
console.log(findMin(randomNum))
console.log (sum)

//bonus & no funcions way

console.log('-------BONUS-------')
randomNum = [15, 'hello', 20, 9, true, 201, false, 88, '150', 66, 352,];
min = +Infinity;
max = -Infinity
sum = 0;

for (let x = 0; x <= randomNum.length - 1; x++) {
    if (typeof randomNum[x] === 'string' || typeof randomNum[x] === 'boolean' || typeof randomNum[x] === 'object') {
        continue;
    }
    if (randomNum[x] > max) {
        max = randomNum[x];
    }
    if (randomNum[x] < min) {
        min = randomNum[x];
    }
}

sum = max + min;

console.log(min)
console.log(max)
console.log(sum)
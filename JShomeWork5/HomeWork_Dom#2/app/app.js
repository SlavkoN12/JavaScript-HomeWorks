// part 1 

let arrNum = [10, 15, 55, 69];

let paragraph1 = document.getElementById('paragraph');

function sum(array) {
    var total = 0;
    for (var x = 0; x < array.length; x++) {
        total += Number(array[x]);
    }
    return total;
}

function printArr(arr) {
    for (x = 0; x <= arr.length - 1; x++) {
        paragraph1.innerHTML += `<li>${arrNum[x]}</li>`
    }
}

// tuka mozev i so funkcija max i min za da funkcionira za bilo koja niza ali predolgo kje fateshe toa :D
function mathEquation (array){
    let num ="";
    for (let x = 0; x < array.length; x++){
        if (array[x] === 10 && 69){
            num += array[x];
        } else {
            num += " + " + array[x];
        }
    }
    return num;
}

printArr(arrNum);
paragraph1.innerHTML += `<li>The sum for the numbers above is:${sum(arrNum)}</li>`;
paragraph1.innerHTML += `<li>The math equation for the sum is (${mathEquation(arrNum)} = ${sum(arrNum)}).</li>`;



//part 2  simple way
let arrSum = arrNum[0] + arrNum[1] + arrNum[2] + arrNum[3];

paragraph1.innerHTML += `<ul>
<li>${arrNum[0]}</li>
<li>${arrNum[1]}</li>
<li>${arrNum[2]}</li>
<li>${arrNum[3]}</li>
<li>The sum for the numbers is:${sum(arrNum)}.</li>
<li>The equaition to get the sum for these numbers is (${arrNum[0]} + ${arrNum[1]} + ${arrNum[2]} + ${arrNum[3]} = ${arrSum})
<ul>`;
function findNumber(number, array){
    let occurences = 0;
    for (let x = 0; x < array.length; x++){
        if(array[x] === number){
            occurences++;
        }
    } return occurences;
}

let inputNum = parseInt(prompt('If you want to know the occurences of a number in our random ARRAY please ENTER HERE!'));
let occurencesArray = [15, 15, 2, 33, 15, 4, 2, 33, 2, 66, 11, 4, 2, 4, 4, 15, 33];
if (inputNum === 15 || inputNum === 2 || inputNum === 33 || inputNum === 4 || inputNum === 66 || inputNum === 11){
    alert(`The number ${inputNum} that you have entered is occuring ${findNumber(inputNum,occurencesArray)} in the array!`);
} else {
    alert(`The number ${inputNum} you have entered does not exists in the array!`);
}
alert(`Thank you for your time!`);
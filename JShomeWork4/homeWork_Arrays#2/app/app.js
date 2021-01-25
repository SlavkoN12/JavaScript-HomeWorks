let myNum = [10, 55, 88, 100, 69];

function sumMyNum(){
    sum = myNum[0] + myNum[1] + myNum[2] + myNum[3] + myNum[4];
    alert(`Your total sum is ${sum}`)
    return sum;
}

sumMyNum()

function validateNumber(num){
    if ( typeof num !== typeof 0){
        alert('Error message')
    } else{
        alert('Input is OK!')
    }
}

validateNumber(myNum[0])
validateNumber('penkalo')
validateNumber(88)
validateNumber(100)
validateNumber(69)


    


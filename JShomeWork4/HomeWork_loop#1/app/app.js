let sentence1 = ['Hi there', 'student', 'from', 'SEDC', '!'];

let sentence2 = ['Greetings', 'interns', 'at', 'Google', '!'];

let sentence3 = ['Ciao', 'bella,', 'were you', 'form', 'the', 'Model agency', '?'];



function smallSentence (array){
    let str ="";
    for (let x = 0; x < array.length; x++){
        if (array[x] == "!" && "?" && "."){
            str += array[x];
        } else {
            str += " " + array[x];
        }
    }
    return str;
}

console.log(smallSentence(sentence3));

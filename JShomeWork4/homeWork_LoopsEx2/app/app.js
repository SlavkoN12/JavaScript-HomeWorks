function filterOddEven (array,type){
    let result = [];
    if(type === "even"){
        for (let num of array){
            if(num % 2 === 0){
                result.push(num);
            }
        }
        return result;
    } else if (type === "odd"){
        for (let num of array) {
            if(num % 2 !== 0){
                result.push(num)
            }
        }
        return result;
    }
}


console.log(filterOddEven([10,13,23,88,74,22,67],"odd"))
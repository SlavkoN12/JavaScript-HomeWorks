
newLine = "";

for(let x = 1; x <= 20; x++){
    if(x % 2 != 0){
        newLine += x + " ";
    }
    else{
        newLine += x + "\n";
    }
}

console.log(newLine);
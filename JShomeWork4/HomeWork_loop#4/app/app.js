let firstName = ['Martin', 'Stefan', 'Robert', 'Aleksandara'];
let lastName = ['Marinkovski', 'Trajkovski', 'Naumovski', 'Petkovska'];
let fullNameArr = [];

    for (let x = 0; x <= firstName.length; x++){
        let allNames = (x+1) + "." + firstName[x] + " " + lastName[x]; 
        fullNameArr.push(allNames)
    }

    console.log(fullNameArr)

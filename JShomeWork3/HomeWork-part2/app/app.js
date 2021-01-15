function dogYear(year){
    let oneHumanYear = year * 7;
    return oneHumanYear;
}

function doggyYears(year){
    let oneDogYear = year / 7;
    return oneDogYear;
}

let howOldIsYourDog = prompt(`Do you want to know your dog's age or want to see what is ur age in dog year's? 
\nType 'dog' if you want to know your dog's age or 'doggy years' if you want to know your age in dog year's!`)
    if (howOldIsYourDog === "dog"){
        let functionDogYear = parseInt(prompt('For how many years do you have your dog?'))
        console.log(`Your dog is ${dogYear(functionDogYear)} years old.`)
    } else if (howOldIsYourDog === "doggy years") {
        let functionDoggyYear = parseInt(prompt('How old are you!?'))
        console.log(`Your are ${doggyYears(functionDoggyYear)} years old in dog years.`)
    } else {
        alert('Thank you for being honest. Have a good one!')
    }
function calculateAge(birthYear){
    let currentYear = new Date().getFullYear()
    let yourAge = currentYear - birthYear;
    return yourAge;
}

let ageCalculator = prompt('Have you forgot your age? Answer with only "yes" or "no" please');
    if (ageCalculator === 'yes'){
        let functionCalculateAge = parseInt(prompt('Please type in your birth year!'));
            console.log(`You are ${calculateAge(functionCalculateAge)} years old!`);
    } else if(ageCalculator === 'no'){
        alert('Thank you for being honest. Have a nice day!');
    } else {
        alert('In the moment there has been an unexpected error. \nPlease try again later!');
    }

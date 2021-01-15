function celsiusFerenheit(celsius) {
    let ferenheit = (celsius * 1.8 + 32);
    return ferenheit;
}

function ferenheitCelsius(ferenheit) {
    let celsius = (5/9) * (ferenheit - 32);
    return celsius;
}

let heatCalculator = prompt(`Hello there! do you want to convert Celsius to Ferenheit or the other way around? 
    \nPlease answer with only 'Celsius' or 'Ferenheit'`);
    if (heatCalculator === "Celsius"){
        let functionCelsiusFerenheit = perseInt(prompt('Please enter your Celsius'));
            console.log(`${celsiusFerenheit(functionCelsiusFerenheit)}Ferenheit`);
            document.write(`${functionCelsiusFerenheit} Celsius to Faranheit is ${celsiusFerenheit(functionCelsiusFerenheit)}`);           
    } else if(heatCalculator === 'Ferenheit'){
        let functionFerenheitCelsius = perseInt(prompt('Please enter your Celsius'));
            console.log(`${ferenheitCelsius(functionFerenheitCelsius)}Celsius`);
            document.write(`${functionFerenheitCelsius} Faranheit to Celsius is ${ferenheitCelsius(functionFerenheitCelsius)}`);
    } else {
        alert("There has been an error! \n Please use only 'Celsius' or 'Ferenheit'")
    }
    alert('Thank you for using the How Hot app. Have a nice day!')
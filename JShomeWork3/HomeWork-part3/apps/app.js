let totalBalance = parseInt(10000);


function cashOut(cash) {
    let amount = totalBalance - cash;
    return amount;
}

function balanceOut() {
    alert(`Your curent balance is ${totalBalance}$`)
}

function balance2() {
    let totalBalance = parseInt(10000);
    return totalBalance2 = totalBalance - cashOut();
}


let moneyATM = prompt("Hi there! What would it be today? Please select one of the following: \n- Cash out. \n - Check balance.")
if (moneyATM === "Cash out") {
    let cashOut1 = prompt("How much money would you like to take out?");
    if (cashOut1 <= totalBalance) {
        console.log(cashOut(cashOut1));
        alert(`You have taken out ${cashOut1}$ and have ${cashOut(cashOut1)}$`);
        document.write(`You have taken out ${cashOut1}$ and have ${cashOut(cashOut1)}$`);
    } else if (cashOut1 > totalBalance) {
        alert(`You dont have enough money, curent balance is ${totalBalance}$! Go rob a bank!`);
    } else {
        alert('There hase been an ERROR 404! Please enter only in NUMBERS!')
    }
} else if (moneyATM === "Check balance") {
    balanceOut();
} else {
    alert("An ERROR 404! has ocured! Please only use the suggested options: \n- Cash out. \n - Check balance.")
}


let ATMloop = prompt(`Is that all or do you want to continue?\n Please select the following: \n- Thats all. \n- Continue`)
if (ATMloop === 'Continue') {
    let moneyATM1 = prompt("Please select one of the following: \n- Cash out. \n - Check balance.");
    if (moneyATM1 === "Cash out") {
        let cashOut2 = prompt("How much money would you like to take out?");
        if (cashOut2 <= balance2()) {
            console.log(cashOut(cashOut2));
            alert(`You have  taken out ${cashOut2}$ and have ${balance2() - cashOut(cashOut2)}$`);
            document.write(`You have taken out ${cashOut2}$ and have ${balance2() - cashOut(cashOut2)}$`);
        } else if (cashOut2 > balance2()) {
            alert(`You dont have enough money, curent balance is ${balance2()}$! Go rob a bank!`);
        } else {
            alert('There hase been an ERROR 404! Please enter only in NUMBERS!');
        }
    } else if (moneyATM === "Check balance") {
        alert(`Your current balance is ${balance2()}$`);
    } else {
        alert("An ERROR 404! has ocured! Please only use the suggested options: \n- Cash out. \n - Check balance.");
    }
}
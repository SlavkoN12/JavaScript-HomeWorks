
function User(firstName, lastName, sector) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sector = sector;
}

let employee1 = new User('Bob', 'Duley', 'finance')
let employee2 = new User('Mark', 'Twain', 'data procesor')
let employee3 = new User('John', 'Wick', 'security')
let employee4 = new User('Jane', 'Cool', 'HR')
let employee5 = new User('Jack', 'Sparrow', 'finance')
let employee6 = new User('Mickey', 'Mouse', 'IT')


let oldUsers = [employee1, employee6, employee3];
let migratedUsers = [employee5, employee4, employee2];
let allUsers = [employee1, employee2, employee3, employee4, employee5, employee6,]


function printUser() {
    let allUsers = prompt('Input old or migrated Users!')
    if (allUsers === 'old') {
        for (let i = 0; i <= oldUsers.length - 1; i++) {
            console.log(oldUsers[i]);
        }
    } else if (allUsers === 'migrated') {
        for (let i = 0; i <= migratedUsers.length - 1; i++) {
            console.log(i + 1 + '.' + migratedUsers[i].firstName);
        }
    } else {
        alert("ERROR")
    }
}

printUser();

function searchUser() {
    let fName = prompt('What User are you looking for?')

    for (let i = 0; i <= allUsers.length - 1; i++) {
        if (fName === allUsers[i].firstName) {
            console.log(i + 1 + '.' + allUsers[i].firstName)
            break;
        }
        else {
            alert('ERROR')
            break;
        }
    }
}
searchUser();
// let kind = $('#kind');
// let nameA = $('#name');
// let creBtn = $('#create');
// let header = $('h1');


// function Animal(kind, name) {
//     this.kind = kind;
//     this.name = name;

//     this.speak = function () {
//         return `${kind} says: I love my name ${name}!!`;

//     }
// }


// function checkAnimal(kind,nameA){
//     let animal1 = new Animal(kind, nameA);
//     if(animal1.kind !== Number && animal1.name !== Number){
//         header.html(`<h1>${animal1.speak()}</h1>`);
//     } else {
//         header.html('<h1>ERROR! Please type in kind / name for the animal.</h1>');
//     }
// }

// creBtn.on('click', function(){
//     checkAnimal(kind.val(), nameA.val())
//     console.log(animal1)
// })

// let bookName = $('#book');
// let authorName = $('#author');
// let status = $('#status');
// let statusBtn = $('#check-status');
// let header2 = $('h1')

// function Book(title, author, status,){
//     this.title = title;
//     this.author = author;
//     this.readingStatus = status

//     this.checkBooks = function(status){
//         if(status === 'read'){
//             header2.last().html(`Already read '${bookName.val()}' by '${authorName.val()}'`) 
//         } else {
//             header2.last().html(`You still need to finnish reading '${bookName.val()}' by '${authorName.val()}'`) 
//         }
//     }
// }




// let book1 = new Book(bookName.val(), authorName.val(), status.val());

// function statusBook(){
//     book1.checkBooks(status.val());
// }



// statusBtn.on('click', function(){    
//     statusBook()
// })
// console.log(book1);
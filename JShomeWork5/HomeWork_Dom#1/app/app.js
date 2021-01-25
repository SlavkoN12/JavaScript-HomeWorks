let header1 = document.getElementById('myTitle1');
let header2 =  document.getElementById('myTitle2');
let header3 =  document.getElementById('myTitle3');
let paragraph1 = document.getElementsByClassName('paragraph');
let text1 = document.getElementById('text');
let body1 = document.getElementById('body') ;
let divS = document.getElementsByClassName('aDiv');

body1.style.backgroundColor = 'lightgray';

header1.innerHTML = `<h1 id="myTitle1">${header1.innerHTML}, you can learn to code like Martin here!</h1>`;
header1.style.fontSize = '20px';

header2.innerText += ' with JavaScript not with the HTML!';
header2.style.backgroundColor = 'darkred';
header2.style.marginRight = '500px'; 

header3.innerText += " \nIt's good practise, because practise makes perfect.";
header3.style.color = 'darkred';
header3.style.backgroundColor = 'black';
header3.style.marginRight = '900px';

divS[0].style.backgroundColor = 'darkred';
divS[1].style.backgroundColor = 'gray';
divS[2].style.backgroundColor = 'white';

paragraph1[0].innerText += ' just learn the basics and start from there.';
paragraph1[0].innerHTML += `<p class='paragraph'>You can do what your mind is set to!</p>`;
paragraph1[0].style.fontSize = '25px';
paragraph1[1].style.color = 'white';

paragraph1[2].innerHTML =`<p id="paragraph">What if Martin  and Angela told you all the secrets of programing!?</p>`;
paragraph1[2].style.fontSize = '40px';


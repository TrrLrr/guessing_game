'use strict';

var name = prompt('Ok, first thing\'s first, what\'s your name?');
console.log('My users name:', name);

var kewl = prompt('I\'m going to ask a a few yes/no questions to see how well you know me. Sound cool?');
console.log('Did it sound cool to them?:', kewl);
kewl = kewl.toLowerCase();

if (kewl === 'y' || kewl === 'yes') {
  alert('Good, that\'s because it is');
} else if (kewl === 'n' || kewl === 'no') {
  alert('Bummer, because we\'re doing it anyway.');
} else {
  alert('Yes or No, we went over this...');
}

var iowa = prompt('I\'m from small town Iowa?');
console.log('They knew I wasn\'t from Iowa:', iowa);
iowa = iowa.toLowerCase();

if (iowa === 'y' || iowa === 'yes') {
  alert('NO! I\'m from Idaho, not Iowa. Don\'t feel too bad, alot of people make that mistake');
} else if (iowa === 'n' || iowa === 'no') {
  alert('You\'ve correctly answered my trick question, I will grant you safe passage to question 3(I was going to anyway...)');
} else {
  alert('Why do we keep having to go over this... Y/N or Yes/No...');
  }

var bread = prompt('Bread makes you fat.');
console.log('Bread makes you fat:', bread);
bread = bread.toLowerCase();

if (bread === 'y' || bread === 'yes') {
  alert('BREAD MAKES YOU FAT?!?!');
} else {
  alert('Oh good, because bread is my jam.');
}

var code = prompt('Alright, last question. I\'ve totally got this coding thing figured out... no problem...');
console.log('They believed my lie:', code);
code = code.toLowerCase();

if (code === 'y' || code === 'yes') {
  alert('Yeah...yeah...totally...');
} else {
  ('Whaaaaaaaat... you crazy...');
}

//next code block is random number guessing Game

var answer = Math.floor((Math.random() * 100) +1);
var number;
var counter = 1;
console.log('Randomized answer:', answer);

while (number !== answer) {
  number = parseInt(prompt('What is your fav number?'));

  if (number < answer) {
    alert('Sorry, you were too low');
    counter++;
  } else if (number > answer) {
    alert('Sorry, you were too high');
    counter++;
  } else if (isNaN(number) || number === null) {
    alert('please enter a number');
    counter++;
  }
}

console.log('counter:', counter);

//last code block is (broken) array guessing game

var catz = ['wednesday','moritz','elliot','simone','sebastian'];
var flag;
var guess = 1;

while(guess < 7) {
  var arrGame.toLowerCase() = prompt('Can you guess any of the names of the SEVERAL cats I\'ve owned in my life?');


for(var i = 0; i < catz.length; i++) {
  console.log('each item at each iteration:', catz[i]);


if (arrGame.toLowerCase() === catz[i]) {
  alert('Nailed it!');
  flag = true;
  break;

  }
}

if (!flag) {
  alert('Naw man, naw...');
  counter++;
}
}

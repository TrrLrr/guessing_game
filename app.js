'use strict';

function tayQuiz() {
  askName();
  whereFrom();
  aboutBread();
  lastQuestion();
}


function askName() {
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
}

function whereFrom () {
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
}

function aboutBread () {
  var bread = prompt('Bread makes you fat.');
  console.log('Bread makes you fat:', bread);
  bread = bread.toLowerCase();

  if (bread === 'y' || bread === 'yes') {
    alert('BREAD MAKES YOU FAT?!?!');
  } else {
    alert('Oh good, because bread is my jam.');
  }
}

function lastQuestion () {
  var code = prompt('Alright, last question. I\'ve totally got this coding thing figured out... no problem...');
  console.log('They believed my lie:', code);
  code = code.toLowerCase();

  if (code === 'y' || code === 'yes') {
    alert('Yeah...yeah...totally...');
  } else {
    ('Whaaaaaaaat... you crazy...');
  }
}


//next code block is random number guessing Game
function numberGame() {

  var answer = Math.floor((Math.random() * 100) +1);
  var number;
  var counter = 1;
  console.log('Randomized answer:', answer);

  while (number !== answer) {
    number = parseInt(prompt('I\'m thinking of a number 1-100. That is it?'));

    if (number < answer) {
      alert('Sorry, you were too low');
      counter++;
    } else if (number > answer) {
      alert('Sorry, you were too high');
      counter++;
    } else if (isNaN(number) || number === null) {
      alert('please enter a number');
      counter++;
    } else if (number === answer) {
      alert('That\'s right! The number was ' + answer + ', and it took you ' + counter + ' guesses to get it!');
    }
  }
  console.log('counter:', counter);
}

//last code block is (broken) array guessing game
function catName() {

  var catz = ['wednesday','moritz','elliot','simone','sebastian'];
  var guessLeft = 6;

  while(guessLeft > 0) {
    var arrGame = prompt('Can you guess any of the names of the SEVERAL cats I\'ve owned in my life?');
    console.log('Number of guesses left:', guessLeft);


    for(var i = 0; i < catz.length; i++) {
      console.log('each item at each iteration:', catz[i]);


      if (arrGame.toLowerCase() === catz[i]) {
        alert('Nailed it!');
        guessLeft = -1;
        break;
      }
    }

    guessLeft--;

    if (guessLeft === 0) {
      alert('Sorry, you didn\'t guess any of my cats. Their names are Wednesday, Moritz, Elliot, Simone, and Sebastian.');
    } else {
      alert('Naw man, naw... you have ' + guessLeft + ' guesses left.');
    }
  }

}

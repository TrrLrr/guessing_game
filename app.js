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

var xmas = prompt('I love me some Christmas music...');
console.log('user didn\'t know my hatred of xmas music', xmas);
xmas = xmas.toLowerCase();

if (xmas === 'y' || xmas === 'yes') {
  alert('NO! Christmas music harshes my mellow!');
} else if {
  alert('Dat\'s wassup');
} else {
  alert('This is a YES or NO situation, same as before...');
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

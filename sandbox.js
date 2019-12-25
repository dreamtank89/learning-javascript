console.log('hello world');
let email = 'farhan@shoppegram.com';


//string concatenation
let firstName = 'Farhan';
let lastName = 'Mohamed';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[6]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName[4].toUpperCase());

let result = fullName[4].toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string method
// let keputusan = email.indexOf('m');
// console.log(keputusan);

// let keputusan = email.slice(0,12);
// let keputusan = email.substr(3,4);
let keputusan = email.replace('n', 'w');
console.log(keputusan);
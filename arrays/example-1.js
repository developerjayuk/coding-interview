const namesArray = ['John','Paul','Sue','Michelle','Henry'];

// push
namesArray.push('George');

// pop
namesArray.pop(); // removes 'George' from the end of the array

// unshift
console.log('Before unshift:', namesArray.length);
const arrayLength = namesArray.unshift('Ringo'); // adds 'Ringo' to the beginning of the array
console.log('After unshift:', arrayLength);

// splice
namesArray.splice(2, 1, 'Yoko'); // removes 'Paul' and adds 'Yoko' at index 2

// output 
console.log(namesArray);

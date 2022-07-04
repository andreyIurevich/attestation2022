let str = 'red blue green red';

console.log('-> replace 1: ', str.replace('red', 'black'));
console.log('-> replace 2: ', str.replace(/red/g, 'black'));

console.log('-> replaceAll: ', str.replaceAll('red', 'yellow'));

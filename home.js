const { getUserProfile, getUserSubcriptionDetails } = require('./profile');
// const exportedElement = require('./profile');

// require('../programs/removeDuplicates')
// Import to where it is used.


let profile = getUserProfile();
let subscription = getUserSubcriptionDetails();

console.log('User Profile: ', profile);
console.log('Subscribed Plan: ', subscription);


// const result = exportedElement();

// console.log('Result: ', result);

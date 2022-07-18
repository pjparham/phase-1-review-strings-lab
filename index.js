// Write your code in this file!
const currentUser = 'Grace Jones';
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!'; //concantenation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //interpolation
const excitedWelcomeMessage = welcomeMessage.toUpperCase()
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
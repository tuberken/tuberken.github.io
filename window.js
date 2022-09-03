// Window alert() method

// As you have seen at very beginning alert() method displays an alert box with
// a specified message and an OK button. It is a builtin method and it takes on argument.

alert(message)

alert('Welcome to 30DaysOfJavaScript')
// Do not use too much alert because it is destructing and annoying, use it just to test.


// Window prompt() method

// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

prompt('required text', 'optional text')

let number = prompt('Enter number', 'number goes here')
console.log(number)



// Window confirm() method

// The confirm() method displays a dialog box with a specified message, along with an OK 
// and a Cancel button. A confirm box is often used to ask permission from a user to execute
// something. Window confirm() takes a string as an argument. Clicking the OK yields true 
// value, whereas clicking the Cancel button yields false value.

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
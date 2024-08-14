/*
SOURCE: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TYPES OF DATA IN JS
A value in JS is ALWAYS of a certain type. For example, a string or a number.

There are EIGHT basic data types in JS.
We can put any type of data in a variable. For example, a variable can at one moment be 
a string and then store a number.

*/
// no error:
let message = "hello";
message = 123456;

console.log(message);
/*

note that console.log will show "123456" as that was the value that was last assigned.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A VARIABLE

A variable is a "named storage" for data. We can use variables to store goodies, visitors,
and other data.
To create a variable in JS, use LET (as seen above).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A STRING

Depending on what kind of work you're doing, you might end up working more with pieces of
text rather than numbers. A STRING is a piece of text and is a fundamental building block
of the language.

Declaring Strings

Strings are dealt with similary to numbers, but there are notable differences.

*/
let string = "the revolution will not be televised.";
console.log(string);
/*

Here we have DECLARED A VARIABLE, initialized it with a string value, and then returned 
the value using console.log. The difference between a string and a number is that you 
must surround a STRING with quotes ("") (refer to message declaration above for example of
numbers).

Failure to wrap your string in quotes will result in the console and/or browser interpreting 
your string is a variable name, property name, reserved word, or similar.
In this event, if the browser doesn't recognize the unquoted text, then an error is raised
(IE, "missing; before statement"). If the browser can detect where a string starts but not
it's end (owing to a missing quote), it reports an "unterminated string literal" error.
If your program is raising such errors, then go back and check all your strings for this
issue.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SINGLE QUOTES, DOUBLE QUOTES, AND BACKTICKS
In JS, you can choose single quotes ('), double quotes ("), or backticks (`), to wrap your
strings in.

*/
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `backtick`;

console.log (single, double, backtick);
/*

Note that you may stack log commands by separating the commands w/ a comma (,).

Note that you MUST use the same type of quote for the start and the end of the variable.
Strings declared using single quotes and double quotes are the same, and whichever used
is down to personal preference (or dictated by the contents of your string). 
However, strings declared using BACKTICKS are a special kind of string called a TEMPLATE
LITERAL. In most ways, template literals are like normal strings, but they have a few 
special properties.
    - You can EMBED JAVASCRIPT in them
    - You can declare template literals over MULTIPLE LINES.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

EMBEDDING JAVASCRIPT

Inside a template literal, you can wrap JavaScript variables or expressions inside ${ },
and the result will be included in the string:

*/
let name = "Chris";
let greeting = `hello, ${name}`;

console.log(greeting);
/*

This technique can be used to amlgamate two variables as well:

*/
let one = "Hello, ";
let two = "how are you?";
let joined = `${one}${two}`;

console.log(joined);
/* 

Joining strings together using this method is called CONCATENATION.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONCATENATION IN CONTEXT


*/
document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementById("concatButton");

function greet() {
    let name = prompt("What is your name?");
    let greeting = document.querySelector("#greeting");

    greeting.textContent = `Hello ${name}, nice to meet you!`;
}

button.addEventListener("click", greet);
});
/*

Note that we had to wrap the whole function in the event listener for DOMContentLoaded.

Breaking this function down, we see that it's listening for the page to load before 
actuating the function in any way. 

Next we see that the variable "button" value has been assigned as "concatButton", which
is an element ID in our corresponding HTML document.

Next, we create our function and name it "greet". Within this function we declare 'name'
equal to a string whose value is derived from a prompt box that populates when you click
on the button. 

This appears to be a shorthand to generate a method for the user to manually enter the value
of the variable 'name'. This works by populating a popup box showing the text entered in the 
parenthesis, a textArea element, and a submit button. It's pretty neat and the potential uses 
are very intriguing.

Anyways, next we have the 'greeting' variable, which targets the element whose ID is #greeting
by way of querySelector. In this case, it's an empty div below the button which is there solely
to display the answering textContent of this function. 

The querySelector thing has quite a few intriguing possibilities and will need to be explored in 
far more depth later.

finally we have the actual function part of the function which sets the textContent of #greeting
(by way of the previously declared vairable) to the concatenated text entered there (ie `Hello 
${name}, nice to meet you!`).

Lastly, we have an additional eventListener set for when the user clicks on the element that was
previously assigned as the value for the variable 'button'. This is what ties the function to that
button and honestly it's pretty neat because I've never done one this way.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONCATENATION USING "+"

You can concatenate normal strings using the "+" operator.

*/
let greeting2 = "Hello";
let name2 = "Chris";

console.log(greeting2 + ", " + name2);
/*

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
INCLUDING EXPRESSIONS IN STRINGS

You can include JS expressions in Template Literals, as well as variables, and the results
are included in the overall result.

*/
let song = "Boulevard of Broken Dreams";
let score = 9;
const highestScore = 10;

let output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;

console.log(output);
/*

Note -- quotes around the strings, numbers don't require them. 
Note -- backticks to allow template literals.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
MULTILINE STRINGS

Template literals respect line breaks in the source code, so you can write strings that span 
multiple lines.

*/
let newLine = `One day you finally knew
what you had to do, and began.`;

console.log(newLine);
/*

In order to achieve the same without backticks, you'd need to use the line break characters (\n).
Example:

let newLine = "One day you finally knew\nwhat you had to do, and began.";
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
INCLUDING QUOTES IN STRINGS

Using " marks on a string which, itself, includes " will force the string to terminate early.
Recommended practice is to use ' marks to denote the string if you're going to use " marks and
vice versa.

If it's unavoidable, you may use the escape function (\) to let the console know that the character
should not be considered the closing character of the string. 

This escape function may be used for other problematic symbols should you require it.

*/

let name3 = "Front ";
let number2 = 242;

console.log(name3 + number2);
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONVERSIONS

the Number() function converts anything passed to it into a number (if it can).

*/
let myString = "123";

let myNum = Number(myString);

console.log(typeof myNum);
/* 

Note -- Console will show "number" because that is the type of data variable myNum has become. If
you were to just print myNum you'd get "123", same as myString.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Conversely, the string() function converts anything passed to it into a string.

*/
let myNum2 = 123;
let myString2 = String(myNum2);

console.log(typeof myString2);
/* 

Note -- console will show "string" because that is the type of data that variable myString2 has become.
If you were to just print myNum2 you'd get "123", same as myNum2.

Use-cases for these functions are many. An example of one would be a user entering a number into a 
text field which would show that number as a string. If you wanted to USE that number as a number
you'd need to use the Number() function to convert it.
*/
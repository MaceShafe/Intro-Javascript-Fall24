// generally I'm bad at understanding instructions
//if there's anything I did wrong here let me know and I'll redo it if you clarify.

"use strict";

let form = document.getElementById("form");

// Rewrite the following with Arrow Functions:
// a)
let i = 0
setInterval ( () => console.log(i++), 5000);
// b)
let x = 2;
let square = x =>  x^2;

// c)

form.onmouseover = () =>alert("boo jumpscare");


// 2.  In 3 lines, submit an AJAX request to file.php with a get variable of id=99.  Let the request object be named "xhr".

let xhr= new XMLHttpRequest();
xhr.open("get", "file.php");
xhr.send("id=41088");

// 3.  What property of the xhr would contain the response text?
 //xhr.responsetext


// 4.  Do the same request with Fetch! (just 1 line  ... no need for outputting the response)

fetch("file.php*id=41088");
//  doesnt exist in php file so it comes up with an error? 

//‼️     If I was meant to put something in the php file let me know, I'll need to work that out.


// 5.  A promise object: promise.


// promise
// .then(msg => "Promise kept")
// .then(msg2 => msg2.substr(0,3))
// .then(msg3 => console.log(msg3))
// .catch(msg=>console.log(msg));

// If the promise resolves, what is the value displayed in the console?

//* "Pro" is displayed, it takes the first three characters of "Promise kept"
//* Otherwise, it just puts the original message
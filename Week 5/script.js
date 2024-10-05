//based a good amount of this code off of going through the video tutorial!

//majority of this will show up in the console! Made it look nice and fancy so it isnt that much of a headache to look through

"use-strict";
let customForm = document.forms["customForm"]; // form name

const email = customForm.elements["email"]; //email
const username = customForm.elements["username"]; //username
const password = customForm.elements["password"]; //password
const phoneNum = customForm.elements["phoneNumber"]; //phone Number
const selectList = customForm.elements["pickANumber"]; //pick a number list
const multiSelectList = customForm.elements["pickATechCompany"]; //favorite tech company list 


//focuses input email
email.focus();


email.onblur = function () {
    console.log('---------');
    console.log("User has clicked away from the email input"); //logs when user clicks away from email input

};


customForm.onchange = changed; //causes changed event whenever an input is changed


function changed() {

    console.log('################'); //just a vidual cue for the console to show when it starts!
    console.log("form changed");


    console.log('---------');
    console.log('the user has selected:');
    console.log(document.querySelector('input[name="exampleRadios"]:checked').value); //logs which radio is checked


    console.log('---------');
    console.log('Email:');

    email.setCustomValidity(""); //still have no clue how or why this works, but i think this resets it?

    if (email.validity.patternMismatch) {
        email.setCustomValidity("Email must be an actual email");

    } if (email.validity.valueMissing) {
        email.setCustomValidity("Email must not be blank");
    } else {
        console.log('email input success');
    };


    console.log('---------');
    console.log('Phone:');
    validatePhoneNum();

    function validatePhoneNum() {
        var pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/; //Thanks to this stack overflow thread for providing a phone number validation
        phoneNum.setCustomValidity("");                                                   

        if (!pattern.test(phoneNum.value)) {
            phoneNum.setCustomValidity("Phone Number must be an actual phone number!");
            console.log('validation FAILED');
        } else {console.log('validation SUCCESS');
        }
    }


    console.log('---------');
    console.log('Username:');

    username.setCustomValidity("");

    if (!username.validity.valueMissing) { //username logging
        console.log("here!");
    } else {
        console.log("missing");
        username.setCustomValidity("Username must not be blank ya silly goof");
    }


    console.log('---------');
    console.log('Password:');
    password.setCustomValidity("");

    if (password.validity.valid) { //password validation logging
        console.log("valid");
    } else {
        console.log("invalid");
        password.setCustomValidity("Password must not be blank ya silly goof");

    };


    console.log('---------');
    console.log('multilist:');

    for (let i = 0; i < multiSelectList.options.length; i++) { //loops through the multiselect list until it matches its length
        if (multiSelectList.options[i].selected) {
            console.log(multiSelectList.options[i].value); // or innerHTML
        }
    }

    console.log('---------');
    console.log('formOverall');

    if (customForm.checkValidity()) { //checks validity of overall form
        console.log("valid");
    } else {
        console.log("invalid");
    }
}

//submit validation
document.getElementById("submitButton").addEventListener("click", submitCheck);

function submitCheck() {
    if (customForm.checkValidity()) {
        document.getElementById("submitText").innerHTML = "Valid! You'll be redirected"
    } else {
        document.getElementById("submitText").innerHTML = "Invalid, try again!"
    };
};

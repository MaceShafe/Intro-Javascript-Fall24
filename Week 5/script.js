"use-strict";

// FORM CONTROL


document.getElementById('InputEmail').focus();


document.getElementById('InputEmail').onblur = function() {
    console.log("User has clicked away from the email input");
};
        //I am unsure on how to include in a way that meets the criteria of the assignment 
        //"blur(): Remove focus from an input field when the user clicks away."
        //The only way I can see this is to use blur after they click away, which is unnecessary
        //which is why I settled on the above ^


// THE FORM OBJECT ***
// let customForm = document.forms[0]; // form index
 let customForm = document.forms["customForm"]; // form name
// let customForm = document.getElementById("userFormID"); // form ID

customForm.addEventListener('input', changed);

// customForm.elements["password"].addEventListener("invalid", function(evt) {
//    // fevt.preventDefault();
// console.log("Invalid fired");
// }};

function changed(event) {
    // console.log(this.name);
    // console.log(InputEmail.value);
    // for (let x = 0; x < customForm.length; x++) {
    //     console.log(customForm.elements[x].value + "\n");
    // }
console.log("form changed")
let multiSelectList = document.getElementById("mid");



        for (let i = 0; i < multiSelectList.options.length; i++) {
            if (multiSelectList.options[i].selected) {
                console.log(multiSelectList.options[i].value); // or innerHTML
            }
        }

    // loop method for radios
    // let going = customForm.elements.exampleRadios;
    // for (let i = 0; i < going.length; i++) {
    //     if (going[i].checked) {
    //         console.log(going[i].value);
    //         break;
    //     }
    // }

    // faster method fon radios
    // console.log(document.querySelector('input[name="exampleRadios"]:checked').value);

    // if (customForm.elements["password"].validity.valid) { // book error? use validity.valid
    // console.log("valid");
    // }else{
    // console.log("invalid");
    // }

    customForm.elements["password"].setCustomValidity(""); // must go before checkValidity !!
    if (customForm.elements["password"].checkValidity()) { // applied to one field
        console.log("valid");
    } else {
        console.log("invalid");
        customForm.elements["password"].setCustomValidity(customForm.elements["password"].value + " is an invalid password");
    }

    // customForm.elements["cc"].setCustomValidity(""); //must go before checkValidity !!
    // if (customForm.elements["cc"].validity.patternMismatch) { // applied to one field
    //     console.log("cc invalid");
    //     customForm.elements["cc"].setCustomValidity(customForm.elements["cc"].value + " is an invalid cc number");
    // } else {
    //     console.log("cc valid");
    // }

// customForm.elements["CVC"].setCustomValidity(""); // must go before checkValidity !!
// iF(1(/^\d{3]$/.test(customForm.elements["CVC"].value))) <
//console.log("CVC invalid");
//customForm.elements["CVC"].setCustomValidity(customForm.elements["CVC"].value+" is an invalid CVC number");
//NJelse{
//console.log("CVC valid");

customForm.reportValidity();

}

// ELEMENTS OF A FORM **************
//let email = customForm. elements[0]; // by "name" or getElementByID



// ELEMENTS OF A FORM
let email = customForm.elements[0]; // by "name" or getElementByID


// SELECT LISTS
let selectList = document.getElementById("sid");
// for (let i=0; i<selectList.options.length; i++) {
//console.log(selectList.options[i].value); // or innerHTML
//}


// FORMATTING
let pi = 3.145647357;
let big = 1000000.999

console.log(pi.toFixed(2));
console.log(big.toLocaleString("en-US", {style: "currency", currency: "USD"})); // fr //"en-US", {style: "currency", currency: "USD"]

//ended off at 32 mins
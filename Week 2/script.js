const A = 5;

let B = 1;
let C = 2;

let Dfunc = 2;


aPlusB(B); //3

document.getElementById("clickBait").addEventListener('click', function() {
    console.log("The value of A is "+A);
});

document.getElementById("checkValue").addEventListener('click', aPlusB);


window.addEventListener('load', initFunc)

function aPlusB(x) {
    //isNaN(x) ? Dfunc = "Not A Number!" : Dfunc x + y;
   
    //Dfunc = x;
    if (document.getElementById("checkValue").checked == true) {
        document.getElementById("content").innerHTML = "checked";
    }else{
        document.getElementById("content").innerHTML = "not checked";

    }
}

function initFunc() {
    Dfunc = document.getElementById("textValue").value;
    document.getElementById("content").innerHTML = Dfunc;

    document.getElementById("checkValue").Checked = false;
}

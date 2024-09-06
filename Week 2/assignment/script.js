const conversion = 12;

let inputNum;
let answer;

document.getElementById("clickBait").addEventListener('click', function(){
    inputNum = document.getElementById("textValue").value; //sets inputNum to be the textbox value
    calcAnswer(conversion, inputNum)
});

function calcAnswer(conv, input) {

    answer = conv * input;

    if (document.getElementById("checkValue").checked == true) { 
        answer++ //literally adds one to the answer to make it wrong :)
    }

    document.getElementById("content").innerHTML = answer+" inches";
    console.log("Answer is "+answer); //debug

}

window.addEventListener('load', initFunc)

function initFunc() {
    inputNum=0; 
    answer=0;
    //sets inputnum and answer VARIABLES to zero
    document.getElementById("textValue").value = inputNum;
    document.getElementById("content").innerHTML = inputNum+" inches";
    //sets the associated values shown to match inputnum, always being zero
}

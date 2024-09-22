let heading_1 = document.getElementById("heading_1");
let ordered_list_1 = document.getElementById("ordered_list_1");
let content_1 = document.getElementById("content_1");

let button_1 = document.getElementById("button_1");


//heading_1.textContent = "this header has been edited";


//*2. DOM Traversal
console.log(content_1.childNodes)

//*3 DOM Modification

//line_items = ordered_list_1;
line_items = document.querySelectorAll("#ordered_list_1 > li")

new_item = document.createElement("li")

function addToList(){ordered_list_1.appendChild(new_item).textContent = "Four";}

button_1.onclick = addToList;


//*4. Timed Updates


let todayDate = document.getElementById("todayDate");
let timeID=window.setInterval(updateDate, 1000)


function updateDate() {
    todayDate.innerHTML= new Date().toString()        
}



//*5. User Input 
let button_2 = document.getElementById("button_2");
let userTextBox = document.getElementById("userTextBox");
let result = document.getElementById("result");



function submissionConfirmation() {
    let truth = confirm("Are you sure?");
    
    if (truth === true){ 
        result.innerHTML=("Result Confirmed!") 

    }
    else{
        result.innerHTML=("Error!") 


    }

}

button_2.onclick = submissionConfirmation;


//*6 Windo Properties 
let ScreenWidthPrint = document.getElementById("ScreenWidthPrint");


if (screen.width >= 1280) {
    ScreenWidthPrint.innerHTML=("You're on a PC!") 
} else if (screen.width <= 720 ) {
    ScreenWidthPrint.innerHTML=("You're on a phone!") 
} else {ScreenWidthPrint.innerHTML=("You're on a Tablet!") 
}

//*7 Navigation History

document.getElementById("button_3").addEventListener("click", () => {
    history.back()
});

// for (x=0;x<line_items.length;x++) {
//     alert(line_items[x].textContent);
// }







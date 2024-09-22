let months = ["Jan", "Feb", "Mar"];
let days = [];
days[5] = "friday";

let pianokeys = [88]; //creates 88 pieces in the array

let rows = 5;
let cols = 12;

let grid = [ //shows arrays of arrays
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
];


    let Items = document.getElementsByTagName("li")


    for (i = 0; i < Items.length; i++) { console.log(Items[i].innerHTML); }
    document.writeln("<table border=1>");

    for (i = 0; i < grid.length; i++) {
        document.writeln("<tr>")
        for (k = 0; k < grid[i].length; k++) {
            if (k > 3 && k <= 5) {
                if (i >2) {
                    continue;
                } else if (x==1) {
                    document.writeln("<td style='color:red;'>" + grid[i][k] + "</td>");
                }
            }
        }
        document.writeln("</td>")

    }
    document.writeln("</table>")


let discipline = "I will not chew gum in class";
let x = 1;

do {
    document.writeln(x + ". " + discipline + "<br>");
    x++;
} while (x <= 10); 

// let y = [1,3,5,10]
// y.forEach(stepUp5); 

// function stepUp5(arrValue, i, arr) {
//     arr[i] = arrValue+5;
//     document.writeln(arr[i]+"<br>");

// }

// items = [1,2,3,4]

// items.forEach(checkLineItems);

// function checkLineItems(value) {
//     document.writeln(value+"<br>");
// }

switch (rows) {
    case "string":
        document.writeln("</table>")
        break;

    case 2:
        document.writeln("</table>")
        break;
    }

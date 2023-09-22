/* 
Another way of using control flow, or writing code in a non-linear fashion, is by 
using a switch statement. This is similar to how an if/else statement checks for 
multiple "if" conditions, and runs code only if those conditions have been met.

*/

var sign = prompt("What is your astrological sign?").toLowerCase();

switch(sign) {
    case "taurus":
        alert("Taurus are calm");
        break;
    case "gemini":
        alert("Yay! Gamini's are cool AF");
        break;
    default: 
    alert("not cool");
    break;
}
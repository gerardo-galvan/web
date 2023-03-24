// document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el");
let saveElement = document.getElementById("save-element")
let count  = 0;

 function increment() {
    count +=  1;
    countEL.textContent = count;
    
 }
  
 function save() {
    let countString = count + "-";
    saveElement.textContent += countString;
    
 }
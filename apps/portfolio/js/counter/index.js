// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
let saveElement = document.getElementById("save-element")
let count  = 0;

 function increment() {
    count +=  1;
    countEl.textContent = count;
    
 }
  
 function save() {
    let countString = count + "-";
    saveElement.textContent += countString;
    countEl.textContent = 0;
    count = 0;
    
 }
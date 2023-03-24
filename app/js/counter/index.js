// document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el");
let count  = 0;

 function increment() {
    count +=  1;
    countEL.innerText = count;
    
 }
  
 function save() {
    console.log(count);
 }
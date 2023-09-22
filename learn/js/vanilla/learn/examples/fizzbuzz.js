/* 
Print all numbers from 1 to 100 with three exceptions:

If the number is divisible by 3, print fizz
If the number is divisible by 5, print buzz
If the number is divisible by 3 AND 5, print fizzbuzz

*/

for(i = 1; i <= 100; i++){

    if(i%3 === 0){
        if(i%5 === 0) {
            console.log("fizzbuzz")
        }else {
        console.log("fizz");
    }else if(i%5 === 0){

        console.log("buzz");
    }   else{
        console.log("i");
    }
}
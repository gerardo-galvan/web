var questions = [
    "what is your name",
    "what is your fav hobby?",
    "what is your fav programming language?"
    ];

var answers = [];

function ask(i){
    
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data', function(data) {
    
    answers.push(data.toString().trim());
    
    
  // echo data being entered
    //process.stdout.write('\n' + data.toString().trim() + '\n'); 
    if (answers.length < questions.length){
        
        ask(answers.length);
    } else {
        process.exit(); // cases process to exit
    }
});

process.on('exit', function () {
    process.stdout.write("\n\n\n\n");
 
   process.stdout.write(`Go ${answers[1]}`);
       
   process.stdout.write("\n\n\n\n");
    
});

ask(0);
function innertel () {
    window.open("indexer.html", "_self");
}

function hide () {
    setTimeout(function() {
        $('#logo').fadeOut('slow');
    }, 1000); 
}

 
setTimeout(function() {
    window.location.href = 'run/os/';
  }, 1000);


/* hide(); */

/*
function show () {
    setTimeout(function() {
        $('#search').fadeIn('slow');
    }, 1000); 
}

show();

*/


function ichat() {
    setTimeout(function() {
        $('#chat_div').fadeIn('slow');
    }, 1000); 
}

ichat();


function chat() {
    var site = "https://innertel.vercel.app";
    document.getElementsByName('chat')[0].src = site;
   
}

 
chat();



 
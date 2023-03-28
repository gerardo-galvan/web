function innertel () {
    window.open("search.html", "_self");
}




function hide () {
    setTimeout(function() {
        $('#logo').fadeOut('fast');
    }, 1000); 
}

 
hide();

function show () {
    setTimeout(function() {
        $('#search').fadeIn('fast');
    }, 1000); 
}

 
show();
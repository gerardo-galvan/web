function innertel () {
    window.open("search.html", "_self");
}


function redirect_Page () {
    var tID = setTimeout(function () {
        window.location.href = "search.html";
        window.clearTimeout(tID);		// clear time out.
    }, 1000);
}

redirect_Page();
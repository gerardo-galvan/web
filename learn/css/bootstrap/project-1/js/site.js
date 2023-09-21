(function() {
 
 	"use strict";
 
 //reference to pick button we create in the DOM
 	var $pickButton = $("#pickButton")
 
	//jQuery to handle the event when someone selects menu item
	// look for anchor tag inside list item of dropdown 
	$("#reasonDropdown>li>a").on("click", function(){
		
		// $this - wraps text of anchor that was picked in a jQuery wrapper
		// text() will get text value in that menu item
		var reason = $(this).text();
		
		// set text of button
		$pickButton.text(reason);	
	});
	
	// reference to dialog
	var $openWindow = $("#openWindow");
	
	// Form with id of #contactForm. On submit run function. 
	$("#contactForm").on("submit", function() {
	    //show element that has id of #openWindow
		$openWindow.modal('show');
		return false;
	});
	
	
	var $sentAlert = $("#sentAlert");
	
	// when dialog is closed run function
	$openWindow.on("hidden.bs.modal", function () {
		$("#sentAlert").show();
	});
	
	// when alert is closed run hide.() function
	$sentAlert.on("close.bs.alert", function () {
		$sentAlert.hide();
		return false;
	});
	
	
	
	
})();

		
		
 
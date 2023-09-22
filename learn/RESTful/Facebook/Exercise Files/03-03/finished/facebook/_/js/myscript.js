window.fbAsyncInit = function() {
	FB.init({
		appId      : '401236519908500', // App ID
		channelUrl : '//iviewsource.com/channel.php', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		frictionlessRequests : true, // enable frictionless requests		
		xfbml      : true  // parse XFBML
	});

	// Additional initialization code here

	//Next, find out if the user is logged in
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			var uid = response.authResponse.userID;
			accessToken = response.authResponse.accessToken;
			$(".loggedin").css('display','block');
			$(".loggedoff").css('display','none');

		} else if (response.status === 'not_authorized') {
			//User is logged into Facebook, but not your App

		} else {
			// User is not logged into Facebook at all
			window.top.location ='https://www.facebook.com/index.php';
		} //response.status
	}); //getLoginStatus
}; //fbAsyncInit

function goLogIn() {
  FB.login(function(response) {
    // handle the response
    $(".loggedin").css('display','block');
    $(".loggedoff").css('display','none');
  }, {scope: 'email,user_likes'}); //FB.login
} //goLogIn



// Load the JavaScript SDK Asynchronously
(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));

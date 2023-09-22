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

			FB.api('/me', function(info) {
				console.log(info);
				$('#welcome').html("Hello " + info.first_name );
			});


		} else if (response.status === 'not_authorized') {
			//User is logged into Facebook, but not your App


			  var oauth_url = 'https://www.facebook.com/dialog/oauth/';
			  oauth_url += '?client_id=401236519908500'; //Your Client ID
			  oauth_url += '&redirect_uri=' + 'https://apps.facebook.com/sourcefooo/'; //Send them here if they're not logged in
			  oauth_url += '&scope=user_about_me,email,user_location,user_photos,publish_actions,user_birthday,user_likes';
		
			  window.top.location = oauth_url;


		} else {
			// User is not logged into Facebook at all
			window.top.location ='https://www.facebook.com/index.php';
		} //response.status
	}); //getLoginStatus
}; //fbAsyncInit


function populateVideos(data) {
  var entries = data.feed.entry;
  var output = '<h2 class="label">Latest Videos</h2>';

  for (var i=0; i<data.feed.entry.length; i++) {
    var entriesID=entries[i].id.$t.substring(38);
    var entriesTitle=entries[i].title.$t;
    var entriesDescription=entries[i].media$group.media$description.$t;
    var entriesThumbnail=entries[i].media$group.media$thumbnail[1].url;

    if (i==0) {
      output += '<div class="first">';
      output +=   '<h3>' + entriesTitle + '</h3>';
      output +=   '<iframe src="http://www.youtube.com/embed/'+entriesID+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay="0" frameborder="0" allowfullscreen></iframe>';
      output +=   '<p>' + entriesDescription + '</p>';
      output += '</div>';
      output += '<ul>';
    } else {
      output += '<li><div class="entriestitle">' + entriesTitle + '</div>';
      output += '<a href="http://www.youtube.com/watch?v=' + entriesID + '&feature=youtube_gdata" target="_blank"><img src="' + entriesThumbnail + '" alt=' + entriesTitle + ' /></a>';
    }
  }
  output +='</ul>';
  document.getElementById('videogroup').innerHTML = output;
}

// Load the JavaScript SDK Asynchronously
(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));


FB.api(
	  '/551077738284508',
	  'GET',
	  {"fields":"albums{photos}", "access_token": "484574588397458|e95a845e8264f2e6cbe58e8c0dbbfa37"},
	  function(response) {
	  	console.log(dictionary["bmw"]);
	  	var images = response.albums.data;
	  	for(var albumimg in images){
	  		var album = images[albumimg].photos.data;
	  		
	  		if($.inArray(images[albumimg].id, blocked) < 0){		
	  			for(var image in album){
			  		var imgId = album[image].id;
			  		$("#images").append("<img class='img-thumbnail' src='http://graph.facebook.com/"+imgId+"/picture' style='height: 100px;' />");

		  		} 
	  		}else{
	  			
	  		}
	  	}
	 	
	  }
	);
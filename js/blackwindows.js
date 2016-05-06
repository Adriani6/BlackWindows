//Globals
//Blocked Albums
var blocked = ["566193116772970", "567318796660402", "566190623439886", "974255372633407", "932232823502329", "566352843423664"];
//Album IDS
var dictionary = {
	"featured": 567318796660402,
	"audi": 777956948929918,
	"bmw": 779386798786933,
	"ford_toyota": 716225128436434,
	"mercedes": 568901169835498,
	"mmc": 607727695952845,
	"lrrover": 647980988594182,
	"vx": 739019256157021,
	"vw": 759654700760143,
	"sm": 665521543506793,
	"svk": 635708243154790,
	"honda": 691024190956528,
	"other": 624049890987292,
	"home": 802245673167712,
	"carAdvert": 649368588455422
}

//Constructor
var Blackwindows = function(){
	this.token = "484574588397458|e95a845e8264f2e6cbe58e8c0dbbfa37";
}
//Get Access Token
Blackwindows.prototype.getToken = function(){return this.token;}
//Get album JSON from FB.
Blackwindows.prototype.fetchAlbum = function(album){
	return $.getJSON({
		dataType: "json",
		url : "https://graph.facebook.com/"+album+"?fields=photos&access_token="+this.getToken(),
	});
}

Blackwindows.prototype.processImages = function(json){
	//Photo Data object
	var dO = json.photos.data;
	$("#images").html("");
	for(var photo in dO){
		$("#images").append("<img class='img-thumbnail' src='http://graph.facebook.com/"+dO[photo].id+"/picture' style='height: 100px;' />");
	}
}

$(document).ready(function(){
	$("a").click(function(){
		if($(this).attr("data-make")){
			var bw = new Blackwindows();
			bw.fetchAlbum(dictionary[$(this).attr("data-make")]).then(function(returndata){
				bw.processImages(returndata);
			});
		}
	})
});
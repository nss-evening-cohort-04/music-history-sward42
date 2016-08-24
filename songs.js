var songs = [];
var songDiv = document.getElementById("songDescription");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Like a Prayer > by Madonna on the album Like a Prayer");
songs.unshift("Crazy > by Gnarls Barkley on the album St. Elsewhere");

//console.log(songs);

	var newSongs = [];
	for (var i = 0; i < songs.length; i++) {
		newSongs = songs[i].replace(">", "-")
		.replace("*", "")
		.replace("@", "")
		.replace("(", "")
		.replace("!", "")

		songDiv.innerHTML += newSongs;
		
		 console.log(newSongs);
	};
	

// function badChars(songz2){
// 	var newSongs2 = [];
// 	for (var i = 0; i < songz2.length; i++) {
// 		newSongs2 = songz2[i].replace("*", "")
// 		.replace("@", "")
// 		.replace("(", "")
// 		.replace("!", "");
// 	}
// }
// console.log(greaterReplace(songs));




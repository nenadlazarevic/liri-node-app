require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var moment = require('moment');
var axios = require('axios')
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
var action = ["spotify-this-song", "movie-this", "concert-this", "do-what-it-says"];
var action = process.argv[2];
function switching() {
    switch (action) {

        case "concert-this":
            bandsInTown();
            break;
        case "movie-this":
            omdb();
            break;
        case "spotify-this-song":
            mySpotify();
            break;
        case "do-what-it-says":
            doWhat();
            break;

    }

}
switching();

function bandsInTown() {
    var nodeArgs = process.argv; 
    var artist = ""; 
    for (var i = 3; i < nodeArgs.length; i++) {
    
        if (i > 2 && i < nodeArgs.length) {
          artist = artist +  nodeArgs[i];
        
        }
        else {
          artist = nodeArgs[i];
      
        }
    }

      var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

      console.log(queryUrl);



axios.get(queryUrl).then(
  function(response) {
    console.log(" ");
    console.log("**********************************************************************");
      console.log("Name of the venue: " + response.data[0].venue.name);
      console.log(" ");
    console.log("Venue location: " + response.data[0].venue.city+", " + response.data[0].venue.region);
    console.log(" ");
    console.log("Date of evant: "+ moment(response.data[0].datetime).format('LLL') );
    console.log(" ");
    console.log("**********************************************************************");
    
    

  })
}




// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
function omdb(){

    
    var nodeArgs = process.argv;
     
    // Create an empty variable for holding the movie name
    var movieName = "";
    
    if( nodeArgs.length === 2){
         movieName = "Mr Nobody"
     }
   
    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {
    
      if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
      
      }
      else {
        movieName += nodeArgs[i];
    
      }
    }

   

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);



axios.get(queryUrl).then(
  function(response) {
    console.log(" ");
    console.log("**********************************************************************");

    console.log("Title: " + response.data.Title);
    console.log(" ");
    console.log("Release Year: " + response.data.Year);
    console.log(" ");
    console.log(response.data.Ratings[0].Source +" : "+ response.data.Ratings[0].Value);
    console.log(" ");
    console.log(response.data.Ratings[1].Source +" : "+ response.data.Ratings[1].Value);
    console.log(" ");
    console.log("Country: "+ response.data.Country);
    console.log(" ");
    console.log("Language: "+ response.data.Language);
    console.log(" ");
    console.log("Plot: "+ response.data.Plot);
    console.log(" ");
    console.log("Actors: "+ response.data.Actors);
    console.log("**********************************************************************");
    console.log(" ");
   
    
    

  }
);

}
// omdb()

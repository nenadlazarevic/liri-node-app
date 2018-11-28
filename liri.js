require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var moment = require('moment');
var axios = require('axios')
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
var action = process.argv[2];
var input = process.argv[3];
function switching() {
    switch (action) {
        case "concert-this":
            bandsInTown(input);
            break;
        case "movie-this":
            omdb(input);
            break;
        case "spotify-this-song":
            spotifyy(input);
            break;
        case "do-what-it-says":
            doIt();
            break;

    }

}
switching();

function bandsInTown(input) {
    var nodeArgs = process.argv; 
    var artist = ""; 
    for (var i = 4; i < nodeArgs.length; i++) {
    
        if (i > 4 && i < nodeArgs.length) {
          artist = artist +"+" + nodeArgs[i];
        
        }
        else {
          artist = nodeArgs[i];
      
        }
    }

      var queryUrl = "https://rest.bandsintown.com/artists/" + input +"+"+ artist+ "/events?app_id=codingbootcamp";




axios.get(queryUrl).then(
  function(response) {
      var bandInfo =
    " "+"\r\n"+
    "**********************************************************************"+"\r\n"+
    "Name of the venue: " + response.data[0].venue.name+"\r\n"+
    (" ")+"\r\n"+
    "Venue location: " + response.data[0].venue.city+", " + response.data[0].venue.region+"\r\n"+
    " "+"\r\n"+
    "Date of evant: "+ moment(response.data[0].datetime).format('LLL')+"\r\n"+
    " "+"\r\n"+
    "**********************************************************************";
    
    console.log(bandInfo);
     log(bandInfo)
    

  });
}


function spotifyy(input){
    
    if( input == null){
        input = "'The Sign, ace of base'"
    }

spotify.search({ type: 'track', query: input, }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songResult =
    " " +
    "**********************************************************************"+"\r\n"+
    " "+"\r\n"+
    "Artist: " + data.tracks.items[0].album.artists[0].name +"\r\n"+
    " "+"\r\n"+
    "The song name: " + data.tracks.items[0].name+"\r\n"+
     " "+"\r\n"+
    "A preview link of the song from Spotify: " + data.tracks.items[0].external_urls.spotify+"\r\n"+
    " "+"\r\n"+
    "The Name of the Album: "+ data.tracks.items[0].album.name+"\r\n"+
    " "+"\r\n"+
    "**********************************************************************";
    console.log(songResult);
   log(songResult)
    
   
  });
  
};

function omdb(){
    if( input == null){
        input = "'Mr. Nobody'"
    }

var queryUrl = "http://www.omdbapi.com/?t=" + input +  "&apikey=trilogy";



axios.get(queryUrl).then(
  function(response) {
      var movieInfo =
    
    "**********************************************************************"+"\r\n"+

    "Title: " + response.data.Title+"\r\n"+
    " "+"\r\n"+
    "Release Year: " + response.data.Year+"\r\n"+
    " "+"\r\n"+
    response.data.Ratings[0].Source +" : "+ response.data.Ratings[0].Value+"\r\n"+
    " "+"\r\n"+
    response.data.Ratings[1].Source +" : "+ response.data.Ratings[1].Value+"\r\n"+
    " "+"\r\n"+
    "Country: "+ response.data.Country+"\r\n"+
    " "+"\r\n"+
    "Language: "+ response.data.Language+"\r\n"+
    " "+"\r\n"+
    "Plot: "+ response.data.Plot+"\r\n"+
    " "+"\r\n"+
    "Actors: "+ response.data.Actors+"\r\n"+
    "**********************************************************************"+"\r\n"+
    " ";
    console.log(movieInfo);
    log(movieInfo)
    
   }
);

}
function doIt() {
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        }
        

        var dataArr = data.split(",");
        
         
        
        
        
        
        if ( dataArr[0] === "spotify-this-song") {
            
            spotifyy(dataArr[1])
            
            
        }
    })
}
function log(logResults){
    fs.appendFile("log.txt","\r\n"+ logResults + "\r\n", function(err) {

       
        if (err) {
          console.log(err);
        }
      
        else {
          console.log("Content Added to log.txt file");
        }
      
      });
}




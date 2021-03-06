# liri-node-app - Homwork 10

##### LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

1. We have the .gitgnore file to tell us what files won't be commited to github

2. Key.js file will load information of api keys from .env file

3. env file will have our information of api keys and because is in the .gitgnore file it won't be commited to the git.
In this way we can keep sensitive information hidden from public.

4. This file will be used by the NPM "dotenv" package to set what are known as environment variables to the global process.env object in node.

5. We made a random.txt file to send commands to our code when it is called in terminal

6 We have the log.txt file to store our data.

## Running liri.js code

### bands in town API

We made function bandsInTown to search the Bands in Town Artist Events API.

Here you can see how code is working
We also use moment metod to set format of the date.

![concert-this](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/concert-this.png)

### NPM node-spotify-api

We made a function for taking information from npm spotify.

If no song is provided then our program will default to "The Sign" by Ace of Base
this is how the running code is working.


![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/spotify.png)

### Movie-this

We made function for taking information about movie

This is how the running code is working

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/movie.png)

Also if we do not provide input, the program will output data for the movie 'Mr. Nobody.'

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/defoult%20movie.png)

### node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

This is how the code is working:

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/do-what.png)

### log.txt

We made log.txt file for storing all data:

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/log.png)






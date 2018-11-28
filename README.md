# liri-node-app - Homwork 10

##### LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

1.We have .gitgnore file to tell what files won't be commited to the github

2. Key.js file will load information of Api keys from .env file

3. env file will have our information of Api keys and becouse is in gitgnore file it won't be commited to the git.
In that way we are keeping sensitive information hiden from public.

4. This file will be used by the NPM "dotenv" package to set what are known as environment variables to the global process.env object in node.

5. We made random.txt file to send commands to our code when is called in terminal

6 We have log.txt file to store our data.

## Running liri.js code

### bands in town API

We made function bandsInTown to search the Bands in Town Artist Events API.

Here you can see how code is working
We also use moment metod to set format of the date.

![concert-this](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/concert-this.png)

### NPM node-spotify-api

We made function fot taking information from npm spotify.

If no song is provided then our program will default to "The Sign" by Ace of Base
this is how running code is working.


![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/spotify.png)

### Movie-this

We made function for taking information about movie

This is how running code is working

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/movie.png)

Also if we do not provide input, the program will output data for the movie 'Mr. Nobody.'

![GitHub Logo](https://github.com/nenadlazarevic/liri-node-app/blob/master/assets/images/defoult%20movie.png)






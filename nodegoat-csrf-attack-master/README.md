An example mailicious page used to create CSRF attack on NodeGoat App

## Usage:


1)  The app is hosted on heroku at -
`https://nodegoat-csrf-attack.herokuapp.com`. You can either use the hosted instance, or clone this app and run it locally. If hosted locally, to launch the app from the Terminal:

    $ node server.js

2) The default target of this app is OWASP NodeGoat project Heroku instance at `https://nodegoat.herokuapp.com`. However, it can be pointed to another instance of NodeGoat application by sending `target` query param in the url with server name

### Examples:


By default, it sends POST request to https://nodegoat.herokuapp.com/profile

To change the target NodeGoat App instance to localhost, use URL:
`http://nodegoat-csrf-attack.herokuapp.com?target=http://localhost:3000`

This will send POST request to `http://localhost:3000/profile`

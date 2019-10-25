require('dotenv').config();
const spotify = require("./plugins/spotify")

spotify.getTrack('Otro Trago')
    .then(obj => console.log(obj))
    .catch(err => console.log(err))


spotify.getArtist('Otro Trago')
    .then(obj => console.log(obj))
    .catch(err => console.log(err))
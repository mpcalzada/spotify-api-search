const Spotify = require('node-spotify-api')
const { spotifySearchURL } = require('../plugins/secrets')
import axios from 'axios';

const spotify = new Spotify({
  id: process.env.SPOTIFY_CLIENT_ID,
  secret: process.env.SPOTIFY_CLIENT_SECRET
})



const getTrack = async (query = '', limit = 1) => {
  const response = await spotify.search({ type: 'track', query, limit })

  const obj = response.tracks.items.map(item => {
    let artists;
    item.artists.map(artist => artists = !artists ? artists = artist.name : artists + `, ${artist.name}`)
    return {
      name: item.name,
      preview: item.preview_url,
      artist: artists
    };
  })

  return obj;
}

const getArtist = (query = '', authToken = '') => {
  let artists;
  axios.get(`${spotifySearchURL}${query}&type=artist&access_token=${authToken}`)
    .then(response => {
      artists = response.data.artists;
      this.setState({ artists, error: '' });
    })
    .catch(error => {
      this.setState({
        error: 'Sorry your search didn\'t return any results...'
      })
    })
}

module.exports.getTrack = getTrack;
module.exports.getArtist = getArtist;
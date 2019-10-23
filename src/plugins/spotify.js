const Spotify = require('node-spotify-api')

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

module.exports.getTrack = getTrack;
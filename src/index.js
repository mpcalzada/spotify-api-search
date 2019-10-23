require('dotenv').config();
const spotify = require("./plugins/spotify")

async function getTrack(query = '', limit = 2) {
  const response = await spotify.search({ type: 'track', query, limit })
  console.log(response.tracks.items)

  const obj = response.tracks.items.map(item => {
    console.log(item)
    return {
      name: item.name,
      preview: item.preview_url
    };
  })

  console.log(obj)
  console.log(JSON.stringify(preview_url))

  return response.tracks.items;
}

async function main() {
  const data = await getTrack('Otro Trago');
};

main();
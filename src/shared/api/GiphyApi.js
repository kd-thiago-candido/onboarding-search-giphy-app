import axios from 'axios';

const URL = `${process.env.VUE_APP_GIPHY_API_HOST}${process.env.VUE_APP_GIPHY_API_GET_PATH}?api_key=${process.env.VUE_APP_GIPHY_API_KEY}`;

export async function getTrends() {
  let gifs = [];
  await axios.get(`${URL}&limit=100&rating=g`).then(response => {
    gifs = response.data.data;
  });
  return gifs;
}

export async function getGifsByName(name) {
  let gifs = [];
  await axios.get(`${URL}&q=${name}&limit=100`).then(response => {
    gifs = response.data.data;
  });

  return gifs;
}

const GphApiClient = require('giphy-js-sdk-core');
const downloader = require('image-downloader');
const uuidv1 = require('uuid/v1');
const os = require('os');

const GIPHYCommandClient = function (apiKey) {
  const client = GphApiClient(apiKey);


  const saveUrlInTmpFile = (gifUrl) => {
      let downloadDest = `${os.tmpdir()}/${uuidv1()}.gif`;
      const downloadOptions = {
        url: gifUrl,
        dest: downloadDest
      };
      return downloader.image(downloadOptions)
        .then(({ filename, image }) => {
          return Promise.resolve(filename);
        });
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const gifsOrStickers = (isStickers) => isStickers ? 'stickers' : 'gifs';
  const rendition = (responseData) => {
    return responseData.images.fixed_width || responseData.images.fixed_width || responseData.images.fixed_width_small || responseData.images.original;
  };

  return {
    search: (query, isStickers) => {
      // Optional Params
      //
      // "limit" - integer - number of results to return, maximum 100. Default 25.
      // "offset" - integer - results offset, defaults to 0.
      // "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
      // "lang" - string - specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
      // "fmt" - string - return results in html or json format (useful for viewing responses as GIFs to debug/test)
      // "sort" - string - the sort order of the results returned (recent | relevant)
      return client.search(gifsOrStickers(isStickers), {"q": query, limit: 1})
        .then((response) => {
          const dataIndex = getRandomInt(response.data.length);
          return rendition(response.data[dataIndex]).url;
        })
        .then((gifUrl) => {
          return saveUrlInTmpFile(gifUrl);
        })
        .catch((err) => {
          console.error(err)
        });
    },

    translate: (phrase, isStickers) => {
      return client.translate(gifsOrStickers(isStickers), {"s": phrase})
        .then((response) => {
          return rendition(response.data).url;
        })
        .then((gifUrl) => {
          return saveUrlInTmpFile(gifUrl);
        })
        .catch((err) => {
          console.error(err)
        })
    },

    byId: (gifId) => {
      return client.gifByID(gifId)
        .then((response) => {
          return rendition(response.data).url;
        })
        .then((gifUrl) => {
          return saveUrlInTmpFile(gifUrl);
        })
        .catch((err) => {
          console.log(err);
        })
    },

    random: (tag, isStickers) => {
      return client.random(gifsOrStickers(isStickers), {})
        .then((response) => {
          return rendition(response.data).gif_url;
        })
        .then((gifUrl) => {
          return saveUrlInTmpFile(gifUrl);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
};



module.exports = GIPHYCommandClient;
const request = require('request');
const YouTube = require('youtube-node');
const dotenv = require('dotenv');

dotenv.config();

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

const YouTubeSearch = {

  Search: (query, numVids, callback) => {

    youTube.search(query, numVids, (error, result) => {
      if (error) {
        callback(error);
      }
      callback(null, result);
    });
  }

};

module.exports = YouTubeSearch;
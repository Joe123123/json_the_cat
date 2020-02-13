const request = require("request");

const fetchBreedDescription = (breed, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      callback(null, data[0].description.trimEnd());
    } else {
      callback(null, "Breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };

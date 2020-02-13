const request = require("request");
const breed = process.argv[2];

const fetch = breed => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (err, response, body) => {
    if (err) {
      console.log(err, response);
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log(data[0].description);
    } else {
      console.log("breed not found");
    }
  });
};

fetch(breed);

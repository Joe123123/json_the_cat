const { fetchBreedDescription } = require("./breedFetcher");
const breed = process.argv[2];
const errorHandler = (err, desc) => {
  if (err) {
    console.log("Error fetch details:", err);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breed, errorHandler);

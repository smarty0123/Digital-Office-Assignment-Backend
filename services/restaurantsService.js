const promise = require("promise");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_KEY,
  Promise: promise
});

const bangsue = {
  lat: 13.8039048,
  lng: 100.5373372
};

const restaurantsService = () => {
  return googleMapsClient
    .placesNearby({
      location: bangsue,
      language: "th",
      rankby: "distance",
      type: "restaurant"
    })
    .asPromise();
};

module.exports = restaurantsService;

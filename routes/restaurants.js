const express = require("express");
const router = express.Router();
const apicache = require("apicache");
const restaurantsService = require("../services/restaurantsService");
const cache = apicache.middleware;

router.get("/", cache("5 minutes"), (req, res) => {
  restaurantsService()
    .then(response => {
      res.send(response.json.results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

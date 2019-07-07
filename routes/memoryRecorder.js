const express = require("express");
const router = express.Router();
const apicache = require("apicache");
const memoryRecorderService = require("../services/memoryRecorderService");
const cache = apicache.middleware;

router.get("/", cache("1 minutes"), (req, res) => {
  memoryRecorderService()
    .then(response => {
      res.send(response.val());
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

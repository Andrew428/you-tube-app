const express = require("express");
const router = express.Router();
const youtubeController = require("../controllers/youtube");

router.get('/search/:term',  youtubeController.ytSearch);

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET player state. */
router.get('/', function(req, res, next) {
  res.json({
    test: 'sdafa'
  });
});

module.exports = router;

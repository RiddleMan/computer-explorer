var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.post('/', function(req, res, next) {
  exec('cliclick m:'+req.body.x+','+req.body.y);

  res.json({});
});

router.post('/tap', function(req, res, next) {
  exec('cliclick c:'+req.body.x+','+req.body.y);

  res.json({});
});

module.exports = router;

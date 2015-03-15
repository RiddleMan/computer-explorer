var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET player state. */
router.get('/', function(req, res, next) {
  console.log('state');

  res.json({
    volume: 20
  });
});

router.post('/play_pause', function(req, res, next) {
  exec('osascript -e \'tell application "Spotify" to playpause\'');

  // exec('"' + this._vsPath + '" "' + this._solutionPath);

  res.json({
    test: 'sdafa'
  });
});

router.post('/volume', function(req, res, next) {
  exec('osascript -e "set Volume ' + req.body.volume + '"');

  res.json({});
});

router.post('/next', function(req, res, next) {
  exec('osascript -e \'tell application "Spotify" to next track\'');

  res.json({});
});

router.post('/prev', function(req, res, next) {
  exec('osascript -e \'tell application "Spotify" to previous track\'');

  res.json({});
});

module.exports = router;

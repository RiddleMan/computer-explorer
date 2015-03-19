var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.get('/', function(req, res, next) {
  var regex = /Applications\/.*\/(.*).app/;

  exec('mdfind \'kMDItemKind=Application\'', function(err, stdout, stderr) {
    if(err)
      return res.json({
        err: err || stderr
      });

    res.json({
      apps: stdout.split('\n').map(function(applicationPath) {
        var app = regex.exec(applicationPath);
        if(app) {
          return {
            path: applicationPath,
            name: regex.exec(applicationPath)[1]
          };
        }

        return;
      }).filter(function(el) {
        return el;
      })
    });
  });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  exec('open "' + req.body.path + '"');

  res.json({ });
});

module.exports = router;

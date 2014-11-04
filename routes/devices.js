var express = require('express');
var router = express.Router();

/* GET devices listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* read a device. */
router.get('/:id', function(req, res) {
    console.log(req.params.id);
  res.send('respond with a resource'+req.params.id);
});

/* update a device. */
router.put('/:id', function(req, res) {
    console.log(req.params.id);
  res.send('respond with a resource'+req.params.id);
});

/* create a device. */
router.post('/', function(req, res) {
    console.log(req);
  res.send('respond with a resource'+req.params.id);
});

/* delete a device. */
router.delete('/', function(req, res) {
   console.log(req);
  res.send('respond with a resource'+req.params.id);
});

module.exports = router;

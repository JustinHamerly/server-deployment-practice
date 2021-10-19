'use strict';

module.exports = function (req, res) {

  let words = req.body.words

  res.send(words);

};
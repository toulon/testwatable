/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('watable', { title: 'Users table' });
};

/*
 * GET data.
 */

exports.data = function(req, res){
  data = require('../data.json')
  res.json(data);
};

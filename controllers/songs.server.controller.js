var mongoose = require('mongoose');
var song = require('./../models/Song.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.all = function(req, res){
  song.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

        res.render('./../public/views/all.ejs', {
          user: req.user || null,
          request: req,
          songs: data
        });
    }
  });
  
};

exports.new = function(req, res){
  res.render('./../public/views/UploadPage.ejs', {
    user: req.user || null,
    request: req
  });
};

/*exports.view = function(req, res){
  res.render('./../public/views/song/view.ejs', {
    user: req.user || null,
    request: req
  });
};

*/


var mongoose = require('mongoose');
var Song = require('./../models/Song.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.all = function(req, res){
  Song.find(function(err, data) {
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

module.exports.create = function(req, res) {
  var song = new Song(req.body);
  song.user = req.user;
  song.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};


module.exports.read = function(req, res) {
  res.json(req.song);
};


exports.view = function(req, res){
  res.render('./../public/views/view.ejs', {
    user: req.user || null,
    request: req
  });
};


exports.songByID = function(req, res, next, id) {
	Song.findById(id).populate('user', 'email').exec(function(err, song) {
		if (err) return next(err);
		if (!song) return next(new Error('Failed to load song ' + id));
		req.song = song;
		next();
	});
};



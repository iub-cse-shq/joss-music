var mongoose = require('mongoose');
var Song = require('./../models/Song.js');
var User = require('./../models/User.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.all = function(req, res){
  
  User.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

        res.render('./../public/views/all.ejs', {
          user: req.user || null,
          request: req,
          user: data
        });
    }
  });
  
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

exports.edit = function(req, res){
  res.render('./../public/views/edit.ejs', {
    user: req.user || null,
    request: req
  });
};

module.exports.update = function(req, res) {
  var song = req.song;

  	song = _.extend(song, req.body);

  	song.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(song);
  		}
  	});
};

exports.home = function(req, res){
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
  var user = new User(req.body);
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

exports.delete = function(req, res) {
	var song = req.song;
	song.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(song);
		}
	});
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



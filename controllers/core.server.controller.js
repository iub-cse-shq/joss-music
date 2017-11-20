'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/HomePage.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.profile = function(req, res) {
	res.render('./../public/views/ProfilePage.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};

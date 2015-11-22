var db = require('../models');
var async = require('async');
var gravatar = require('gravatar');

exports.findUserById = function(_userId, callback) {
	db.User.findOne({
		_id: userId,
	}, callback);
};

/*
一是通过用户ID查找用户；二是通过邮箱地址查找用户，如果没找到，就基于邮箱地址创建一个新账户，头像地址使用`gravatar`这个Node模块来生成。
*/
exports.findByEmailOrCreate = function (email, callback) {
  db.User.findOne({
    email: email
  }, function (err, user) {
    if (user) {
      callback(null, user);
    } else {
      user = new db.User;
      user.name = email.split('@')[0];
      user.email = email;
      user.avatarUrl = gravatar.url(email);
      user.save(callback);
    }
  });
};
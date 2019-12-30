'use strict';

let mongoose = require('mongoose');
let User = mongoose.model('Users');

exports.listUsers = function (req, res) {
    User.find({}, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.createUser = function (req, res) {
    let newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.readUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.updateUser = function (req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.deleteUser = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'User successfully deleted' });
    });
};

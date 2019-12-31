import * as mongoose from 'mongoose';
import { Error, Document } from 'mongoose';
import { Request, Response } from 'express';

const User = mongoose.model('Users');

exports.listUsers = function (req: Request, res: Response): void {
    User.find({}, function (err: Error, users: Document[]): void {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

exports.createUser = function (req: Request, res: Response): void {
    let newUser = new User(req.body);
    newUser.save(function (err: Error, user: Document): void {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.readUser = function (req: Request, res: Response): void {
    User.findById(req.params.userId, function (err: Error, user: Document): void {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.updateUser = function (req: Request, res: Response): void {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        function (err: Error, user: Document): void {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
};

exports.deleteUser = function (req: Request, res: Response): void {
    User.remove({
        _id: req.params.userId
    }, function (err: Error): void {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'User successfully deleted' });
    });
};

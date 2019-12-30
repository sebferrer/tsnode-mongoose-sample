'use strict';
module.exports = function (app) {
    let userController = require('../controllers/userController');

    // GET example: http://127.0.0.1:3000/api/users
    // POST example: curl -v -H "Content-Type: application/json" -XPOST --data "{\"id\":3,\"name\":\"Rick\"}" localhost:3000/api/users
    app.route('/api/users')
        .get(userController.listUsers)
        .post(userController.createUser);

    // GET example: http://127.0.0.1:3000/api/users/5e09d81c65d1e7c3aa8b6bac
    // PUT example: curl -v -H "Content-Type: application/json" -XPUT --data "{\"name\":\"Astley\"}" localhost:3000/api/users/5e09da3af28b384b2912016d
    // DELETE example: curl -v -H "Content-Type: application/json" -XDELETE localhost:3000/api/users/5e09da3af28b384b2912016d
    app.route('/api/users/:userId')
        .get(userController.readUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
        
};
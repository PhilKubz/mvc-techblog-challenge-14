const router = require('express').Router();
const postController = require('./postController');
const userController = require('./userController');

router.get('/post/:id', postController.getPostById);
router.post('/user', userController.createUser);

module.exports = router;

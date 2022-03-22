const { Router } = require('express');
const { createPost, getPost } = require('../controllers/posts');


const router = Router();

router.get('/', getPost)
router.post('/new', createPost)

module.exports = router;
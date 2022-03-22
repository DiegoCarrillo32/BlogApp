const { Router } = require('express');
const { loginUser, createUser } = require('../controllers/users');


const router = Router();

router.post('/', loginUser)
// router.post('/new', createUser)

module.exports = router;
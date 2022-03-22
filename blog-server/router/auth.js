const { Router } = require('express');
const { loginUser, renewUser } = require('../controllers/users');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

router.post('/', loginUser)
router.get('/renew', validateJWT, renewUser);
// router.post('/new', createUser)

module.exports = router;
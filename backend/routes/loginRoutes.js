const exprss = require('express');
const { login } = require('../controllers/loginController');

const router = exprss.Router();

router.get('/', login);

module.exports = router;
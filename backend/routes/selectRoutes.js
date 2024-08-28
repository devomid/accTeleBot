const exprss = require('express');
const { select } = require('../controllers/selectController');

const router = exprss.Router();

router.get('/', select);

module.exports = router;
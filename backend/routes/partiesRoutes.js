const exprss = require('express');
const { getParties } = require('../controllers/partiesController');

const router = exprss.Router();

router.get('/', getParties);

module.exports = router;
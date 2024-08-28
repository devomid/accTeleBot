const exprss = require('express');
const { getItems } = require('../controllers/itemsController');

const router = exprss.Router();

router.get('/', getItems);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
   getSearches,
   creatSearch
} = require('../controllers/Searches');



router.get('/',getSearches);
router.post('/',creatSearch);





module.exports = router;
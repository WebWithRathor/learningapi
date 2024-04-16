const express = require('express');
const router = express.Router();


router.get('/', (req, res,next) => {
    res.send('wow yrr')
});


module.exports = router;
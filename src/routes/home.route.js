/**
 * @license Apache-2.0
 * @copyright 2024 Mudassar
 */

'use strict';


/**
 * node modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const { home } = require('../controllers/home.controller');


router.get('/', home);


module.exports = router;
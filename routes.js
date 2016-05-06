var express = require('express');
var router = express.Router();

var controls = require('./controls');

router.get('/',controls.site.index);

router.get('/api/menu/:id?',controls.menu.findById);

router.get('/api/onlineuser',controls.onlineuser.get);

router.get('/api/user',controls.user.login);

module.exports = router;

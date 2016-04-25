var express = require('express');
var userDao = require('../dao/userDao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加用户
router.get('/addUser', function(req, res, next) {
    userDao.add(req, res, next);
});
// 查询所有用户信息
router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});

module.exports = router;

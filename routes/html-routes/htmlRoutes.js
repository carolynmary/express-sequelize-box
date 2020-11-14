const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get('/', function (req, res) {
   res.render('index');
 });

 router.get('/main', function (req, res) {
   res.render('main');
 });

module.exports = router;

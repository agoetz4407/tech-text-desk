const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const checkAuth = require('../../utils/checkAuth');

module.exports = router;
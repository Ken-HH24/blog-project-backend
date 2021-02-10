const express = require('express');
const blogController = require('../conreollers/blogController');

const router = express.Router();

//添加blog
router.post('/addBlog', blogController.blog_create);

// 获取所有blog
router.get('/allBlogs', blogController.blog_index);

//获取指定blog
router.get('/blog/:id', blogController.blog_details);

//删除指定blog
router.delete('/blog/:id', blogController.blog_delete);

module.exports = router;
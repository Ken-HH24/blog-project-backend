// blog_index, blog_details,  blog_create, blog_delete
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        })
};

const blog_create = (req, res) => {
    // req.body - 请求体
    const blog = req.body.blog;
    // const newBlog = new Blog(req.body);
    const newBlog = new Blog({
        title: blog.title,
        tags: blog.tags,
        content: blog.content
    });
    newBlog.save().then((result) => {
        res.json(result);
        // res.redirect("/");
    }).catch((err) => {
        console.log(err);
    });
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
};

module.exports = {
    blog_index,
    blog_create,
    blog_delete,
    blog_details
}
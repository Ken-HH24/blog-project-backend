const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// 连接数据库
const dbURL = 'mongodb+srv://nodeuser:<password>@cluster0.lmhp3.mongodb.net/<project>?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected successfully');
        app.listen(3000);
    }).catch((err) => {
        console.log(err);
    });

// 处理跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // accept form data
app.use(morgan('dev'));

//blog routes
// app.use('/blogs', blogRoutes);
app.use(blogRoutes);
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './server/routes/posts.js'
// const express = require('express');
// const bodyParser =require ('body-parser');
// const mongoose =require ('mongoose');
// const cors =require ('cors');
import {database} from './server/database/db.js' ;


const app=express();





//旧的bodyparser
// app.use(bodyParser.json({limit:"30mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

//app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


app.use('/posts',postRoutes);

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)


//use mongodb atlas
//const CONNECTION_URL='mongodb+srv://dbUser:root123@cluster0.mwdqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//在许多环境中，作为一种约定，您可以设置环境变量PORT以告知Web服务器要监听的端口。
//因此，process.env.PORT || 3000意味着：环境变量PORT中的任何内容，如果没有，则为3000。
const port=process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
//设置新的url解析器和拓扑
// mongoose.connect(CONNECTION_URL)
//     .then(()=>app.listen(PORT,()=> console.log(`Server running on port:${PORT}`)))
//     .catch((error)=>console.log(error.message));


//更新版本后useFindAndModify
//mongoose.set('useFindAndModify',false);


//const express = require('express');
import express from 'express';
//const router = express.Router();
import test from '../models/test-schema.js';
export const postsTest=(req,res)=>{

    
    console.log(req);
    console.log(res);
    console.log("postsTest");
    // router.route('/test').post((req, res, next) => {
    //     console.log(req.body);
        // test.create(req.body, (error, data) => {
        //     if (error) {
        //         return next(error)
        //     } else {
        //         console.log(data)
        //         res.json(data)
        //     }
        // })
    // });

}

export const createPost=(req,res)=>{

    console.log("createPost-------------------------");
    console.log(req.body);
    
    
    // router.route('/test').post((req, res, next) => {
    //     console.log(req.body);
        test.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                console.log("已添加数据库")
                console.log(data)
                res.json(data)
            }
        })

       
    // });

}
import express from 'express';

import {postsTest,createPost} from '../controllers/posts.js';

const router=express.Router()

//业务逻辑在controllers里否则route将会变得很长,会让我们混淆跳转和业务逻辑，所以分开


//localhost:5000/posts
router.get('/test',postsTest);

router.post('/create',createPost);

export default router;
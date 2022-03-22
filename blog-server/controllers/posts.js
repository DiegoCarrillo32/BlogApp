const { response } = require('express')
const Post = require('../models/post')

const createPost = async (req, res = response) => {
    console.log('TRATANDI DE SUBI POST');
    try {
        console.log(req);
        const newPost = new Post(req.body);
        await newPost.save();
        res.json({
            ok: true,
            newPost
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'Error al crear post'
        })
    }
}

const getPost = async (req, res = response) => {
    try {
        const posts = await Post.find();
        res.json({
            ok: true,
            posts
        })
    } catch (error) {
        res.json({
            ok: false,
            'msg': 'error loading posts'
        })
    }
}

module.exports = {
    createPost,
    getPost
}
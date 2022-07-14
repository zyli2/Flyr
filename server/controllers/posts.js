// Files is made so that posts become easier to scale
// Having too much code can make posts.js in routes too messy and difficult to manage
// This is done so that the code of functions in posts.js
// can be written here and exported to posts.js

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

// 'export' makes it so we can use this in /routes
export const getPosts = async (req, res) => {
    try {
    // retrieve all of the posts in our current database
    // finding something in a model takes time, aka a asynchronous function
    // which is why we need to add async to the function and await for calling the find method
        const postMessages = await PostMessage.find();
    
        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.meesage });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    // post the updated post and the updated post is received from post = req.body from the frontend
    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatePost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
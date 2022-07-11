// Files is made so that posts become easier to scale
// Having too much code can make posts.js in routes too messy and difficult to manage
// This is done so that the code of functions in posts.js
// can be written here and exported to posts.js

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
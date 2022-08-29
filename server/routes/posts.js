import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();


// the route below can only be reached by:
// localhost:5000/post
// not localhost:5000/
// this is because we added a prefix to every route in here
// a callback function for users requesting 5000 and our response
// getPosts is the way we make code easier to manage. Refer to controllers/posts.js
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

// auth is what checks if the user can do certain actions

export default router;
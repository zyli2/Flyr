import express from 'express';

import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();


// the route below can only be reached by:
// localhost:5000/post
// not localhost:5000/
// this is because we added a prefix to every route in here
// a callback function for users requesting 5000 and our response
// getPosts is the way we make code easier to manage. Refer to controllers/posts.js
router.get('/', getPosts);
router.post('/', createPost);


export default router;
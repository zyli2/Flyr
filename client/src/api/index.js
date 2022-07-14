// axios is a library that serves to create HTTP requests that are present externally
import axios from 'axios';

// this is our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () =>axios.get(url);
// specify the data we're sending and where is it gonna be
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
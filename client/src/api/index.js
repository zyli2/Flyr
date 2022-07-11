import axios from 'axios';

// this is our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () =>axios.get(url);
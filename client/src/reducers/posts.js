import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            // returns all the post but the deleted id
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            // have an array of posts, spread the post, and add a new post
            // which is stored in action.payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}
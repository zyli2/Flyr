export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // have an array of posts, spread the post, and add a new post
            // which is stored in action.payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}
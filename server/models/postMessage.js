import mongoose from 'mongoose';

// Schema - allows us to give some uniformity to documents
// each post must have something
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    // array of strings
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
import mongoose from 'mongoose';

// Schema - allows us to give some uniformity to documents
// each post must have something
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    // array of strings
    tags: [String],
    selectedFile: String,
    likecount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
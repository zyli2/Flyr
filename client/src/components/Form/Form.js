// this is the code for creating a "memory"/form on the website

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { Clear } from '@material-ui/icons';

// on individual posts, we need to get the current id
// becuase when we press the "..." spread icon is the edit button
// we need to pass over the id of that post to our form component
// that way we can go from "Creating a memory" to "Editing a memory"
// for the selected post that is identified by its id.
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        // creator/wtv: '' means it's an empty string
        creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    // we run this function when the post gets updated from nothing to a post
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

// once the user press submit, we want to send a post request with all the user's data
    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            // remember that to do so, we need an id so currentId is the first paramter
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        // paper is a white background
        // VALUE here means that the whole data from the poast is gonna be stored in the postData object
                // and value is gonna equal to postData.creator
        // onChange allows us to set each of the different textfields without overriding once another
            // this means setting fields every time but the last property is changed so
            // all the textfield will be fulfilled
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
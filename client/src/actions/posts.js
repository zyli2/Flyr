// the * as means we import everything from actions as api 
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';
import * as api from '../api';

// Actions Creators
// functions that return actions
// action must have a type property and payload is an array where we store all our posts

// this is an asynchronous function because fetching posts can take time
// which is why we have async (dispatch) => and dispatch the action from redux thunk

export const getPosts = () => async (dispatch) => {
    try {
        /*
          What happens here
            Step 1: Get reaponse from api
            Step 2: response always has a data object which is returned from the backend
            Step 3: Then we get data. data = posts
        */
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        // get the data from doing an api request of a post from our backend
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
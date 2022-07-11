// the * as means we import everything from actions as api 
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

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
} 
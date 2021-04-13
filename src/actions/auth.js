import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

// Login User
export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('http://localhost:5000/user', config)
        if (res.data.username === username && res.data.password === password) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            <Redirect to='/products'/>
        } else {
            console.log('usr not found')
        }
    } catch (error) {
        console.log(error)
    }
}


// Logout
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}
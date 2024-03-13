import * as actionTypes from './actionTypes';
import * as urls from '../../Config/urls'
import axios from '../../Utils/axios';

export const addUser = (phoneNo, otp) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(urls.usersUrl, { phoneNo, otp });
            dispatch({
                type: actionTypes.ADD_USER,
                payload: { user: { phoneNo, id: response.data.id, otp: otp } }
            });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };
};

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(urls.usersUrl);
            const userdata = response.data.slice(1);
            dispatch({
                type: actionTypes.FETCH_USER,
                payload: { userdata },
            });

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };
};
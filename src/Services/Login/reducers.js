import { ADD_USER, FETCH_USER } from './actionTypes';

const initialState = {
    users: [],
}

const loginReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user],
            };
        case FETCH_USER:
            return { ...state, users: action.payload.userdata }
        default:
            return state;
    }
}



export default loginReducer;
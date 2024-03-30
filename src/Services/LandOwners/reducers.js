import * as actionTypes from './actionTypes';

const initialState = {
    landowners: [],
    // onboarding: [],
}

const landOwnerReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_LAND_OWNER:
            return {
                ...state,
                landowners: [...state.landowners, action.payload.landownerdata],
            }
        case actionTypes.FETCH_LAND_OWNERS:
            return {
                ...state,
                landowners: action.payload.landowners,
            }
        case actionTypes.EDIT_OWNER:
            const { id, formData } = action.payload;
            const updatedOwners = state.landowners.map(owner => {
                if (owner.id === id) {
                    return { ...owner, ...formData };
                }
                return owner;
            });
            return {
                ...state,
                landowners: updatedOwners,
            };
        default:
            return state
    }
}

export default landOwnerReducer;

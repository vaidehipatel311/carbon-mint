import * as actionTypes from './actionTypes';

const initialState = {
    landparcels: [],
}

const landParcelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LAND_PARCEL:
            return {
                ...state,
                landparcels: [...state.landparcels, action.payload.landparceldata],
            }
        case actionTypes.FETCH_LAND_PARCELS:
            return {
                ...state,
                landparcels: action.payload.landparcels,
            }
        case actionTypes.EDIT_PARCEL:
            const { id, formData } = action.payload;
            const updatedParcels = state.landparcels.map(parcel => {
                if (parcel.id === id) {
                    return { ...parcel, ...formData };
                }
                return parcel;
            });
            return {
                ...state,
                landparcels: updatedParcels,
            };
        default:
            return state
    }
}

export default landParcelsReducer;

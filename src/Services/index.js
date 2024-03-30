import { combineReducers } from "redux";

import landownerReducer from "./LandOwners/reducers";
import landparcelsReducer from "./LandParcels/reducers";
import loginReducer from "./Login/reducers";
import onboardingReducer from "./Onboarding/reducers";
import eventReducer from "./Events/reducers";



export default combineReducers({

    landowners: landownerReducer,
    // onboarding: onboardingReducer,
    landparcels: landparcelsReducer,
    login: loginReducer,
    events: eventReducer,
})
import {IS_AUTH} from '../constants'

const initialState = {
    isLoggedIn: false,
    authorised: "Not Authorised"
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                authorised: action.payload.authorised
            }      
            default:
                return state      
    }
}

export default rootReducer
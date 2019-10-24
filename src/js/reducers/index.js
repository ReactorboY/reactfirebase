import {IS_AUTH} from '../constants'

const initialState = {
    isLoggedIn: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isLoggedIn: action.payload
            }      
            default:
                return state      
    }
}

export default rootReducer
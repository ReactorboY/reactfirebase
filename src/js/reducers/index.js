import {IS_AUTH} from '../constants'

const initialState = {
    isLogeedIn: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isLogeedIn: action.payload
            }      
            default:
                return state      
    }
}

export default rootReducer
import {IS_AUTH,DATA_LOADED} from '../constants'

const initialState = {
    isLoggedIn: false,
    authorised: "Not Authorised",
    remoteArticles:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                authorised: action.payload.authorised
            }      
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload)
            })
            default:
                return state      
    }
}

export default rootReducer
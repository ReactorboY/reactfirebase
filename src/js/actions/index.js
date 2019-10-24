import {IS_AUTH, DATA_REQUESTED,LOGIN_REQUESTED} from '../constants'

export function auth(payload){
    return {
        type: IS_AUTH,
        payload
    }
}

export function getData() {
    return {
        type:DATA_REQUESTED
    }
}

export const getLogin = (data) => {
    return {
        type:LOGIN_REQUESTED,
        payload:data
    }
}
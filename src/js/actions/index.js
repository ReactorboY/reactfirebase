import {IS_AUTH} from '../constants'

export function auth(payload){
    return {
        type: IS_AUTH,
        payload
    }
}
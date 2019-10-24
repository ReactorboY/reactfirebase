import {IS_AUTH} from '../constants'

const forbiddenWords = ['auth', 'react']

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            // do your stuff
            if (action.type === IS_AUTH){
                console.log('Forbidden called');
                const foundWord = forbiddenWords.filter(word => action.payload.authorised.includes(word))
                if(foundWord.length){
                    return dispatch({
                        type:"FOUND_BAD_WORD"
                    })
                }
            }
            return next(action)
        }
    }
}
import {takeEvery,call,put} from 'redux-saga/effects'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import {LOGIN_REQUESTED,LOGIN_LOADED} from '../constants'

export default function* watcherSaga() {
    yield takeEvery(LOGIN_REQUESTED, loginSaga)
}

// function* workerSaga(){
//     try {
//         const payload = yield call(getData)
//         yield put({type:DATA_LOADED, payload})
//     } catch(e) {
//         yield put({type:"API_ERRORED",payload: e})
//     }
// }

// loginSaga
function* loginSaga(action) {
    try {
        const payload = yield call(getLogin, action.payload)
        console.log(payload)
        yield put({
            type: LOGIN_LOADED,
            payload
        })
        const history = createBrowserHistory()
        console.log(history)
        history.push('/')
    } catch(e) {
        yield put({type:"API_ERRORED",payload:e})
    }
}

// function getData(){
//     return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
//         response.json()
//     );
// }

// getLogin functon

const getLogin = (data) => {
    console.log('Working till here')
    console.log(data);
    return axios.post('https://fast-earth-90719.herokuapp.com/user/login',data)
}
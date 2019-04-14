import { takeEvery, put } from 'redux-saga/effects'

import { INIT_LIST_SAGA } from '../store/actionTypes'
import { getInitListActoon } from '../store/actionCreators'
import axios from "axios";

function* initListSaga() {
    try {
        const res = yield axios.get("./list.json");
        const data = res.data.data;
        let initListAction = getInitListActoon(data);
        yield put(initListAction)
    }catch (e) {
        console.log('list.json error')
    }
}

//generator函数
function* mySaga() {
    //这里 当接受到一个INIT_LIST_SAGA这个类型的action 的时候,会执行initListSaga函数
    yield takeEvery(INIT_LIST_SAGA, initListSaga)
}

export default mySaga;


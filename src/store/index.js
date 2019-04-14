//store状态机
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer'

//使用redux-thunk 中间件
import thunk from 'redux-thunk'


//如何创建store 使用createStore方法,创建管理员的时候要把图书馆的小本子给她
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
export default store;


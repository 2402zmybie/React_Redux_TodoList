//store状态机
import {createStore} from 'redux';

import Reducer from './reducer'

//如何创建store 使用createStore方法,创建管理员的时候要把图书馆的小本子给她
const store = createStore(Reducer);
export default store;


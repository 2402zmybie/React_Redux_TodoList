import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));

//导入ReactRedux首页
import ReactReduxApp from './react-redux/App'
//导入Provider
import {Provider} from 'react-redux'
//导入store (使用了react-redux则在index界面导入store)
import store from './react-redux/store'

const App = (
    <Provider store={store}>
        <ReactReduxApp/>
    </Provider>
)

//使用ReactRedux首页
ReactDOM.render(
    App,
    document.getElementById('root'))

serviceWorker.unregister();

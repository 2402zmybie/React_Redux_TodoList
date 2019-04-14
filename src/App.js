import React, {Component} from 'react';
//引入antd样式
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {Button} from 'antd';
import {List} from 'antd';
//引入Store
import Store from './store'
//引入actionCreator
import {
    getInputChangeAction,
    getAddItemClickAction,
    getHandleItemDeleteAction,
    getInitListSaga
} from './store/actionCreators'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = Store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //当store里面的数据变化的时候 调用订阅中的方法
        Store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{margin: 10}}>
                <Input
                    placeholder={'todo info'}
                    style={{width: 300, marginRight: 10}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                <List
                    style={{width: 300}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={
                        this.handleItemDelete.bind(this,index)
                    }>{item}</List.Item>)}
                />
            </div>
        );
    }

    componentDidMount() {
        //构建了一个函数的aciton, 当调用Store.dispatch这个函数的时候,action里面的函数会自动的被执行
        //为什么能把返回值为函数的action发送给Store, 是因为使用了redux-thunk,如果去除掉了redux-thunk
        //会报错,报错内容为aciton必须是一个对象
        // 1 redux-thunk中间件: (action和store的中间)
        // 原理非常简单,就是对Store的dispatch方法做一个升级,之前的dispatch方法只能接受一个对象,而升级之后能接受一个对象,也能接受一个函数了
        // const action = getTodoListMethod();
        // Store.dispatch(action)

        //2 redu-saga中间件
        const actionSaga = getInitListSaga();
        Store.dispatch(actionSaga)
    }


    handleInputChange(e) {
        //触发一个action
        let action = getInputChangeAction(e.target.value)
        Store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(Store.getState())
    }

    handleBtnClick() {
        let action = getAddItemClickAction()
        Store.dispatch(action)
    }

    handleItemDelete(index) {
        let action = getHandleItemDeleteAction(index);
        Store.dispatch(action)
    }
}

export default App;

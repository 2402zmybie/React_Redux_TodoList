import React, {Component} from 'react';
//引入antd样式
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {Button} from 'antd';
import {List, Typography} from 'antd';
//引入Store
import Store from './store'
//引入actionTypes
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM,ITEM_CLICK_DELETE} from './store/actionTypes'

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

    handleInputChange(e) {
        //触发一个action
        let action = {
            type: CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        Store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(Store.getState())
    }

    handleBtnClick() {
        let action = {
            type:ADD_TODO_ITEM
        }
        Store.dispatch(action)
    }

    handleItemDelete(index) {
        console.log(index)
        let action = {
            type:ITEM_CLICK_DELETE,
            index
        }
        Store.dispatch(action)
    }
}

export default App;

import React, {Component} from 'react';
//引入antd样式
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {Button} from 'antd';
import {List, Typography} from 'antd';
//引入Store
import Store from './store'
//引入actionTypes
import {CHANGE_INPUT_VALUE} from './store/actionTypes'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = Store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
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
                <Button type="primary">提交</Button>
                <List
                    style={{width: 300}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }

    handleInputChange(e) {
        //触发一个action
        const action = {
            type: CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        Store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(Store.getState())
    }
}

export default App;

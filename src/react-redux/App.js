//使用react-redux 渲染的首页

import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button,Input,List} from "antd";

//导入aciton
import { inputChangeAction,btnClickAction,itemDeleteAction } from './store/actionCreatros'

//导入 react-redux核心api connect
import {connect} from 'react-redux'

class ReactReduxApp extends Component {
    render() {
        return (
            <div>
                <Input
                    style={{width:300}}
                    placeholder={'请输入内容'}
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                <List
                    style={{width:300}}
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={() => {
                        this.props.handleTodoDelete(index)
                    }}>{item}</List.Item>)}

                />
            </div>
        )
    }

}

//这个函数的意思是state指的是store里面的数据,inputValue映射到组件的props里面
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
//如果对store的数据做修改,将store的dispatch方法挂载在props上面
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = inputChangeAction(e.target.value);
            dispatch(action);
        },
        handleBtnClick() {
            const action = btnClickAction();
            dispatch(action);
        },
        handleTodoDelete(index) {
            const action = itemDeleteAction(index);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxApp);
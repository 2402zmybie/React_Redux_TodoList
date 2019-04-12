import React, { Component } from 'react';

//引入antd样式
import 'antd/dist/antd.css';

import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class App extends Component {
  render() {
    return (
      <div style={{margin:10}}>
        <Input placeholder={'todo info'} style={{width:300,marginRight:10}}/>
        <Button type="primary">提交</Button>
        <List
            style={{width:300}}
            size="small"
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default App;

//引入actionTypes
import { CHANGE_INPUT_VALUE ,ADD_TODO_ITEM,ITEM_CLICK_DELETE, INIT_LIST_ACTION,INIT_LIST_SAGA } from './actionTypes'


export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemClickAction = () => {
    return {
        type:ADD_TODO_ITEM
    }
}

export const getHandleItemDeleteAction = (index) => ({
    type: ITEM_CLICK_DELETE,
    index
})

export const getInitListActoon = (data) => ({
    type:INIT_LIST_ACTION,
    data
})

/*
//使用middleware中间件, 可以让action返回一个函数, 函数中可以做复杂操作
export const getTodoListMethod = () => {
    return (dispatch) => {
        //本地json文件放在 public文件夹中即可, 使用axios或者fetch请求
        axios.get("./list.json")
            .then(res => {
                let data = res.data.data
                let initListAction = getInitListActoon(data);
                console.log(initListAction);
                dispatch(initListAction)
            })
        // fetch("./list.json")
        //     .then(res => res.json())
        //     .then(response => {
        //         let data = response.data;
        //         let initListAction = getInitListActoon(data);
        //         console.log(initListAction);
        //         Store.dispatch(initListAction)
        //     })
    }
}*/

export const getInitListSaga = () => ({
    type:INIT_LIST_SAGA
})

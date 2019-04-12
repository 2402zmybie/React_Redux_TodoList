import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM,ITEM_CLICK_DELETE} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}


/**
 * reducer返回的必须是一个函数,这个函数接受两个参数, reducer负责管理这个应用里面的数据,到底这个里面存什么数据
 * state= defaultState仓库的默认数据已经定义好了
 * 当dispatch一个action之后Redux里面的store会自动的帮我们之前的数据和aciton转发给reducer,reducer会结合之前
 * 的数据和当前用户想要做的操作告诉Store,你现在新的数据应该变成什么样子,会返回一个新的数据
 *
 * 注意reducer可以接受state,但是决不能修改state,这就是为什么要拷贝一个新的state,拷贝一份出来来改变新的state里面的inputValue
 *
 */
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            let newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState
            break;
        case ADD_TODO_ITEM:
            let todoState = JSON.parse(JSON.stringify(state));
            todoState.list.unshift(state.inputValue)
            todoState.inputValue = ''
            return todoState;
            break;
        case ITEM_CLICK_DELETE:
            let itemState = JSON.parse(JSON.stringify(state));
            itemState.list.splice(action.index,1);
            return itemState;
    }
    return state;
}
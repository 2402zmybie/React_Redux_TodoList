//引入actionTypes
import { CHANGE_INPUT_VALUE ,ADD_TODO_ITEM,ITEM_CLICK_DELETE, INIT_LIST_ACTION } from './actionTypes'


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
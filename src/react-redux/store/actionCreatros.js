import { INPUT_CHANGE ,BTN_CLICK, ITEM_DELETE} from './actionTypes'

export const inputChangeAction = (value) => {
    return {
        type: INPUT_CHANGE,
        value
    }
}

export const btnClickAction = () => {
    return {
        type: BTN_CLICK
    }
}

export const itemDeleteAction = (index) => {
    return {
        type: ITEM_DELETE,
        index
    }
}

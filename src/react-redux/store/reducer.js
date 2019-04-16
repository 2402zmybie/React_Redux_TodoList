import { INPUT_CHANGE ,BTN_CLICK,ITEM_DELETE} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [1,2]
}


//reducer是一个纯函数
export default (state = defaultState,action) => {
    if(action.type === INPUT_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === BTN_CLICK) {
        const newState = JSON.parse(JSON.stringify(state));
        if(newState.inputValue !== '') {
            newState.list.unshift(newState.inputValue);
            newState.inputValue = ''
        }
        return newState;
    }
    if(action.type === ITEM_DELETE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    return state;
}
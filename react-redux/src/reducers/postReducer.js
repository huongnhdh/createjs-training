import {FETCH_POST, NEW_POST}  from '../actions/type';

const initState = {
    items : [],
    item: {}
}

export default function(state = initState, action){
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state ,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state ,
                item: action.payload
            }
        default: return state;
    }
}
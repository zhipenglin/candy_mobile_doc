import {LOADING_START,LOADING_END} from '../actions/loadingAction'

export default function(state={},action){
    switch (action.type){
        case LOADING_START:
            return Object.assign({},state,{loaded:false});
        case LOADING_END:
            return Object.assign({},state,{loaded:true});
        default:
            return state;
    }
}
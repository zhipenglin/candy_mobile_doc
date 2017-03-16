import {NAV_SWITCH} from '../actions/navAction'
export default function(state={},action){
    switch (action.type){
        case NAV_SWITCH:
            return Object.assign({},state,{show:action.show});
        default:
            return state;
    }
}
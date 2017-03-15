import menuListAction from '../actions/menuListAction'
export default function(state={},action){
    switch (action.type){
        case menuListAction.FETCH_START:
            return Object.assign({},state,{loaded:false,error:false});
        case menuListAction.FETCH_COMPLETE:
            return Object.assign({},state,{loaded:true,result:action.result});
        case menuListAction.FETCH_FAIL:
            return Object.assign({},state,{error:true,message:action.err_msg});
        default:
            return state;
    }
}
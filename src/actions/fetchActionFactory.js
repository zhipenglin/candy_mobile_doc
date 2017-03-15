import fetch from '../util/fetch'
export default function(head){
    const FETCH_START=`${head}_FETCH_START`,
        FETCH_COMPLETE=`${head}_FETCH_COMPLETE`,
        FETCH_FAIL=`${head}_FETCH_FAIL`;
    function fetchStart(){
        return {
            type:FETCH_START
        }
    }

    function fetchComplete(result){
        return {
            type:FETCH_COMPLETE,
            result
        }
    }

    function fetchFail(err_msg){
        return {
            type:FETCH_FAIL,
            err_msg
        }
    }

    function fetchData(...args){
        return (dispatch,getState)=>{
            dispatch(fetchStart());
            return fetch(...args).then(res=>{
                if(res.err_no==0){
                    dispatch(fetchComplete(res.results));
                }else if(res.err_no===undefined){
                    dispatch(fetchComplete(res));
                }else{
                    dispatch(fetchFail(res.err_msg));
                }
            }).catch((err)=>{
                dispatch(fetchFail('请求发送异常'));
            });
        }
    }

    return {
        FETCH_START,FETCH_COMPLETE,FETCH_FAIL,fetchStart,fetchComplete,fetchFail,fetchData
    }
}
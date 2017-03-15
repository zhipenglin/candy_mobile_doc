import fetch from 'isomorphic-fetch'
import query from 'query-string'

const newFetch=function(url,options){
    return fetch(`/api${url}`,Object.assign({
        credentials: 'include',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    },options)).then(response => response.json(),(err)=>{
        return {
            err_no:'510',
            err_msg:'接口数据获取失败'
        }
    }).then(res=>{
        return res;
    },(err)=>{
        return {
            err_no:'520',
            err_msg:'接口数据格式不正确'
        }
    })
};
Object.assign(newFetch,query);

export default newFetch;
import {Component} from 'react'
import {connect} from 'react-redux'
import {Toast} from 'candy-mobile'
export default function(reducerMap,action,isRefresh=false){
    return function(MiddleComponent){
        return @connect(reducerMap)
        class Load extends Component{
            componentWillMount(){
                const {dispatch,loaded}=this.props;
                if(isRefresh||!loaded){
                    dispatch(action.fetchData());
                }
            }
            shouldComponentUpdate(props){
                const {dispatch,loaded,message,error}=props;
                if(loaded===true){
                    return true;
                }
                if(error===true){
                    new Toast(message);
                }
                return false;
            }
            render(){
                const {dispatch,loaded,result,message,...others}=this.props;
                if(loaded){
                    return (
                        <MiddleComponent {...others} loadResult={result}></MiddleComponent>
                    );
                }else{
                    return (
                        <i className="hoc-loading"></i>
                    );
                }
            }
        }
    }
}
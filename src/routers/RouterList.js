import React,{PureComponent} from 'react'
import{matchPath,withRouter,Route} from 'react-router'
import {connect} from 'react-redux'
import {Toast} from 'candy-mobile'
import {loadingStart,loadingEnd} from '../actions/loadingAction'

@connect()
@withRouter
export default class RouterList extends PureComponent{
    state={
        activeComponent:null
    }
    componentDidMount(){
        this.loadRemoteComponent(this.props);
    }
    componentWillReceiveProps({location,children}){
        if(location.pathname==this.props.location.pathname){
            return
        }
        this.loadRemoteComponent({location,children});
    }
    loadRemoteComponent({location,children}){
        const matchComponent=React.Children.toArray(children).find((item)=>{
            return matchPath(location.pathname,item.props);
        });
        const {dispatch}=this.props;
        if(matchComponent){
            if(typeof matchComponent.props.render=='function'){
                let component=matchComponent.props.render();
                if(typeof component.then=='function'){
                    dispatch(loadingStart());
                    this.setState({
                        activeComponent: null
                    });
                    component.then((mod)=>{
                        this.setState({
                            activeComponent: mod.default ? mod.default : mod
                        });
                        dispatch(loadingEnd());
                    },()=>{
                        new Toast('组件加载失败');
                        this.props.history.push('/404');
                    });
                }else{
                    this.setState({
                        activeComponent: component
                    });
                }
            }else{
                throw new Error('RouterList里的Route必须包含render属性');
            }
        }else{
            this.props.history.push('/404');
        }
    }
    shouldComponentUpdate({location},{activeComponent}){
        return activeComponent&&this.state.activeComponent!==activeComponent;
    }
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }
    render(){
        const {activeComponent}=this.state;
        return <Route component={activeComponent}></Route>;
    }
}
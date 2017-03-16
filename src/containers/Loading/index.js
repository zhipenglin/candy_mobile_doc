import {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'
import Tween from 'rc-tween-one'

const defaultAnimate={width:'80%',duration:3000};

@connect((state={})=>{
    const {loading}=state;
    return loading;
})
export default class Loading extends Component{
    state={
        animate:defaultAnimate,
        show:false
    }
    componentDidMount(){
        this.setState({
            show:this.props.loaded===false
        });
    }
    componentWillReceiveProps({loaded}){
        if(loaded===true){
            this.setState({
                animate:{width:'100%',duration:200}
            });
            setTimeout(()=>{
                this.setState({
                    show:false,
                    animate:defaultAnimate
                });
            },500);
        }else if(loaded===false){
            this.setState({
                show: true
            });
        }
    }
    render(){
        return this.state.show?(
            <div className="ct-loading">
                <Tween animation={this.state.animate} className="ct-loading__item"></Tween>
            </div>
        ):null;
    }
}
import React, { Component } from 'react'
import {Toast} from 'candy-mobile'
import {Route} from 'react-router'

class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })

        props.load().then((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        },(error)=>{
            new Toast('模块加载失败',{callback(){
                props.history.push('/404');
            }});
        });
    }

    render() {
        if(this.state.mod){
            return this.props.children(this.state.mod)
        }else{
            return null;
        }
    }
}

export default (props)=>{
    const {component,...others}=props;
    return (
        <Route render={(props)=><Bundle load={component} {...props}>{(RemoteComponent)=><RemoteComponent {...props}/>}</Bundle>} {...others}/>
    );
}

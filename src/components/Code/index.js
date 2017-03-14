import {Component} from 'react'
import classnames from 'classnames'
import highLight from '../../util/highLight'
import './style.scss'

export default class Code extends Component{
    state={
        code:''
    }
    componentDidMount(){
        const {children,lang}=this.props;
        if(typeof children=='string'){
            highLight(children,lang).then((code)=>{
                this.setState({code});
            });
        }
    }
    render(){
        const {lang}=this.props;
        return (
            <div className="cp-code">
                <pre><code className={classnames('hljs',{[lang]:!!lang})} dangerouslySetInnerHTML={{__html:this.state.code}} /></pre>
            </div>
        );
    }
}
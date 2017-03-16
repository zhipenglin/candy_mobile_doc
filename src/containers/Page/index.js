import {PureComponent} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {navSwitch} from '../../actions/navAction'
import './style.scss'

@connect((state={})=>{
    const {nav}=state;
    return {nav};
})
export default class Page extends PureComponent{
    static defaultProps={
        navShow:true
    }
    componentWillMount(){
        const {navShow,nav,dispatch}=this.props;
        if(nav.show!==navShow){
            dispatch(navSwitch(navShow));
        }
    }
    render(){
        const {name,children}=this.props;
        return (
            <div className={classnames("ct-page",{[`ct-page--${name}`]:name})}>
                <div className="ct-page__content">
                    {children}
                </div>
            </div>
        );
    }
}
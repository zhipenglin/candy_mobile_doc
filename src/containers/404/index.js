import Page from '../Page'
import './style.scss'
import {Button} from 'candy-mobile'
import {withRouter} from 'react-router'
export default withRouter((props)=>{
    const {history}=props;
    return (
        <Page name="404" navShow={false}>
            <i className="icon"></i>
            该页面不存在<br/>
            <Button type="link" onClick={()=>{
                history.push('/');
            }}>点击返回首页</Button>
        </Page>
    );
})
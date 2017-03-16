import Code from '../../components/Code'
import {Button,Toast,Action} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">操作表：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new Action([[{
        text:'请确认',
        label:true
    },{
        text:'确定',
        callback:function(){
            new Toast('点击确定');
        }
    },{
        text:'确定',
        callback:function(){
            new Toast('不关闭');
            return false;
        }
    },{
        text:'确定',
        callback:function(remove){
            new Toast('3s后关闭');
            setTimeout(remove,3000);
            return false;
        }
    }],[{
        text:'取消',
        color:'red'
    }]]);
}}>操作表</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){new Action([[{
                text:'请确认',
                label:true
            },{
                text:'确定',
                callback:function(){
                    new Toast('点击确定');
                }
            },{
                text:'不关闭',
                callback:function(){
                    new Toast('不关闭');
                    return false;
                }
            },{
                text:'3s后关闭',
                callback:function(remove){
                    new Toast('3s后关闭');
                    setTimeout(remove,3000);
                    return false;
                }
            }],[{
                text:'取消',
                color:'red'
            }]]);}}>操作表</Button>
        </div>
    );
}
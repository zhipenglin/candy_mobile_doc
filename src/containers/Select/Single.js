import Code from '../../components/Code'
import {Button,Select,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">单行选择器：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new Select(['选项1','选项2','选项3','选项4'],{
        onChange:function(value) {
          new Toast(value,{type:'success'});
        }
    });
}}>打开选择器</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new Select(['选项1','选项2','选项3','选项4'],{
                    onChange:function(value) {
                      new Toast(value,{type:'success'});
                    }
                });
            }}>打开选择器</Button>
        </div>
    );
}
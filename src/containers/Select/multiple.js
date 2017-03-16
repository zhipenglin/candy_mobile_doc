import Code from '../../components/Code'
import {Button,Select,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">多行选择器：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new Select([{
        list:['选项01','选项02','选项03','选项04'],
        defaultIndex:1
    },{
        list:['选项11','选项12','选项13','选项14'],
        defaultIndex:2
    },{
        list:['选项21','选项22','选项23','选项24'],
        defaultValue:'选项24'
    }],{
        onChange:function(value) {
          new Toast(value,{type:'success'});
        }
    });
}}>打开选择器</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new Select([{
                    list:['选项01','选项02','选项03','选项04'],
                    defaultIndex:1
                },{
                    list:['选项11','选项12','选项13','选项14'],
                    defaultIndex:2
                },{
                    list:['选项21','选项22','选项23','选项24'],
                    defaultValue:'选项24'
                }],{
                    onChange:function(value) {
                      new Toast(value,{type:'success'});
                    }
                });
            }}>打开选择器</Button>
        </div>
    );
}
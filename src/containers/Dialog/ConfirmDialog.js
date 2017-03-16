import Code from '../../components/Code'
import {Button,Toast,Confirm} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">对话框：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    new Confirm('确认框');
}}>确认框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Confirm('确认框',{confirmCallback:function(){
        new Toast('确认',{type:'success'});
    },cancelCallback:function(){
        new Toast('取消',{type:'success'});
    }});
}}>带取消的确认框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Confirm('确认框',{title:'请确定',{confirmCallback:function(){
        new Toast('确认',{type:'success'});
    },cancelCallback:function(){
        new Toast('取消',{type:'success'});
    }});
}}>带标题的确认框</Button>
            `}</Code>
                <Button type="primary" size="small" onClick={()=>{
                    new Confirm('确认框');
                }}>确认框</Button>
                <Button type="primary" size="small" onClick={()=>{
                    new Confirm('确认框',{confirmCallback:function(){
                        new Toast('确认',{type:'success'});
                    },cancelCallback:function(){
                        new Toast('取消',{type:'success'});
                    }});
                }}>带取消的确认框</Button>
                <Button type="primary" size="small" onClick={()=>{
                    new Confirm('确认框',{confirmCallback:function(){
                        new Toast('确认',{type:'success'});
                    },cancelCallback:function(){
                        new Toast('取消',{type:'success'});
                    }});
                }}>带标题的确认框</Button>
                <div className="ct-page__title">设置按钮文案：</div>
                <Code>{`
<Button type="primary" onClick={()=>{
    new Confirm('确认框',{
        textCancel:'我是取消按钮',
        textConfirm:'我是确认按钮',
        confirmCallback:function(){
            new Toast('确认',{type:'success'});
        },
        cancelCallback:function(){
            new Toast('取消',{type:'success'});
        }
    });
}}>自定义按钮文案的确认框</Button>
            `}</Code>
                <Button type="primary" onClick={()=>{
                    new Confirm('确认框',{
                        textCancel:'我是取消按钮',
                        textConfirm:'我是确认按钮',
                        confirmCallback:function(){
                            new Toast('确认',{type:'success'});
                        },
                        cancelCallback:function(){
                            new Toast('取消',{type:'success'});
                        }
                    });
                }}>自定义按钮文案的确认框</Button>
                <div className="ct-page__title">自定义/取消对话框自动关闭：</div>
                <Code>{`
<Button type="primary" onClick={()=>{
    new Confirm('确认框',{
        textCancel:'我是取消按钮',
        textConfirm:'我是确认按钮',
        confirmCallback:function(){
            new Toast('不关闭对话框',{type:'success'});
            return false
        },
        cancelCallback:function(remove){
            new Toast('3s后关闭对话框',{type:'success'});
            setTimeout(()=>{
                remove();
            },3000);
            return false;
        }
    });
}}>自定义按钮文案的确认框</Button>
            `}</Code>
                <Button type="primary" onClick={()=>{
                    new Confirm('确认框',{
                        textCancel:'我是取消按钮',
                        textConfirm:'我是确认按钮',
                        confirmCallback:function(){
                            new Toast('不关闭对话框',{type:'success'});
                            return false
                        },
                        cancelCallback:function(remove){
                            new Toast('3s后关闭对话框',{type:'success'});
                            setTimeout(()=>{
                                remove();
                            },3000);
                            return false;
                        }
                    });
                }}>自定义确认框关闭</Button>
        </div>
    );
}
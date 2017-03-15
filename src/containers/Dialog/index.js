import Page from '../Page'
import Code from '../../components/Code'
import {Button,Toast,Confirm,Action,Drawer} from 'candy-mobile'
export default ()=>{
    return (
        <Page>
            <div className="ct-page__title">提示框：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    new Toast('错误提示框');
}}>显示错误提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('成功提示框',{type:'success'});
}}>显示成功提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('加载中...',{type:'loading'});
}}>显示加载提示框</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('错误提示框');
}}>显示错误提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('成功提示框',{type:'success'});
}}>显示成功提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('加载中...',{type:'loading'});
}}>显示加载提示框</Button>
            <div className="ct-page__title">设置自动关闭时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    new Toast('3s后自动关闭',{time:3000});
}}>显示提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('不自动关闭',{time:0});
}}>显示提示框</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('3s后自动关闭',{time:3000});
}}>显示提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('不自动关闭',{time:0});
}}>显示提示框</Button>
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
            <div className="ct-page__title">Drawer：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    const Menu=({remove})=>{
        return (
            <div>
                <h1>我是Drawer</h1>
                <Button size="small" onClick={remove}>关闭Drawer</Button>
            </div>
        );
    }
    new Drawer(<Menu></Menu>);
}}>抽屉</Button>
<Button type="primary" size="small" onClick={()=>{
    const Menu=({remove})=>{
        return (
            <div>
                <h1>我是右Drawer</h1>
                <Button size="small" onClick={remove}>关闭Drawer</Button>
            </div>
        );
    }
    new Drawer(<Menu></Menu>,{right:true});
}}>右抽屉</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={()=>{
                const Menu=({remove})=>{
                    return (
                        <div>
                            <h1>我是Drawer</h1>
                            <Button size="small" onClick={remove}>关闭Drawer</Button>
                        </div>
                    );
                }
                new Drawer(<Menu></Menu>);
            }}>抽屉</Button>
            <Button type="primary" size="small" onClick={()=>{
                const Menu=({remove})=>{
                    return (
                        <div>
                            <h1>我是右Drawer</h1>
                            <Button size="small" onClick={remove}>关闭Drawer</Button>
                        </div>
                    );
                }
                new Drawer(<Menu></Menu>,{right:true});
            }}>右抽屉</Button>
        </Page>
    );
}
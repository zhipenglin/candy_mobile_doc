import Code from '../../components/Code'
import {Button,SelectDate,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">日期选择器：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectDate({
        title:'日期选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>打开选择器</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectDate({
                    title:'日期选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>打开选择器</Button>
            <div className="ct-page__title">设置开始时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectDate({
        start:new Date(),
        title:'日期选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置开始时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectDate({
                    start:new Date(),
                    title:'日期选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置开始时间</Button>
            <div className="ct-page__title">设置结束时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectDate({
        end:new Date(),
        title:'日期选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置结束时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectDate({
                    end:new Date(),
                    title:'日期选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置结束时间</Button>
            <div className="ct-page__title">设置当前时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectDate({
        current:'2000-09-21',
        title:'日期选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置当前时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectDate({
                    current:'2000-09-21',
                    title:'日期选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置当前时间</Button>
            <div className="ct-page__title">隐藏日选择：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectDate({
        dayDisplay:false,
        title:'日期选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>隐藏日选择</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectDate({
                    dayDisplay:false,
                    title:'日期选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>隐藏日选择</Button>
        </div>
    );
}
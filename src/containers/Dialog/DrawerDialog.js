import Code from '../../components/Code'
import {Button,Drawer} from 'candy-mobile'

export default ()=>{
    return (
        <div>
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
        </div>
    );
}
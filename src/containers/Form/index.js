import Page from '../Page'
import Code from '../../components/Code'
import { withRouter } from 'react-router'
import {Form,Input,SelectField,SubmitButton,Toast,SwitchField} from 'candy-mobile'
export default withRouter(({history})=>{
    return (
        <Page>
            <div className="ct-page__title">普通表单：</div>
            <Code>{`
<Form submit={(data)=>{
    console.log(data);
    return new Promise((reslove,reject)=>{
        setTimeout(function(){
            new Toast('提交成功',{
                type:'success',
                removeCallback(){
                    history.replace('/');
                }
            });
            reslove();
        },2000);
    });
}}>
    <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>
    <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>
    <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>
    <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>
    <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>
    <SelectField name="like" label="爱好" rule="req">{
        [
            [
                {value:1,text:'小说'},
                {value:2,text:'诗歌'},
                {value:3,text:'报告文学'}
            ],
            [
                {value:4,text:'看电影'},
                {value:5,text:'踢足球'},
                {value:6,text:'打游戏'},
                {value:7,text:'户外运动'}
            ]
        ]
    }</SelectField>
    <SelectField name="school" label="学校" placeholder="请选择学校">{['清华大学','北京大学','上海交通大学','复旦大学']}</SelectField>
    <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>
</Form>
            `}</Code>
            <Form submit={(data)=>{
                console.log(data);
                return new Promise((reslove,reject)=>{
                    setTimeout(function(){
                        new Toast('提交成功',{
                            type:'success',
                            removeCallback(){
                                history.replace('/');
                            }
                        });
                        reslove();
                    },2000);
                });
            }}>
                <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>
                <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>
                <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>
                <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>
                <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>
                <SelectField name="like" label="爱好" rule="req">{[[{value:1,text:'小说'},{value:2,text:'诗歌'},{value:3,text:'报告文学'}],[{value:4,text:'看电影'},{value:5,text:'踢足球'},{value:6,text:'打游戏'},{value:7,text:'户外运动'}]]}</SelectField>
                <SelectField name="school" label="学校" placeholder="请选择学校">{['清华大学','北京大学','上海交通大学','复旦大学']}</SelectField>
                <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>
            </Form>
            <div className="ct-page__title">inline表单：</div>
            <Code>{`
<Form inline submit={(data)=>{
    console.log(data);
    return new Promise((reslove,reject)=>{
        setTimeout(function(){
            new Toast('提交成功',{
                type:'success',
                removeCallback(){
                    history.replace('/');
                }
            });
            reslove();
        },2000);
    });
}}>
    <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>
    <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>
    <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>
    <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>
    <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>
    <SelectField name="like" label="爱好" rule="req">{
        [
            [
                {value:1,text:'小说'},
                {value:2,text:'诗歌'},
                {value:3,text:'报告文学'}
            ],
            [
                {value:4,text:'看电影'},
                {value:5,text:'踢足球'},
                {value:6,text:'打游戏'},
                {value:7,text:'户外运动'}
            ]
        ]
    }</SelectField>
    <SelectField name="school" label="学校" placeholder="请选择学校">{['清华大学','北京大学','上海交通大学','复旦大学']}</SelectField>
    <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>
</Form>
            `}</Code>
            <Form inline submit={(data)=>{
                console.log(data);
                return new Promise((reslove,reject)=>{
                    setTimeout(function(){
                        new Toast('提交成功',{
                            type:'success',
                            removeCallback(){
                                history.replace('/');
                            }
                        });
                        reslove();
                    },2000);
                });
            }}>
                <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>
                <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>
                <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>
                <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>
                <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>
                <SelectField name="like" label="爱好" rule="req">{[[{value:1,text:'小说'},{value:2,text:'诗歌'},{value:3,text:'报告文学'}],[{value:4,text:'看电影'},{value:5,text:'踢足球'},{value:6,text:'打游戏'},{value:7,text:'户外运动'}]]}</SelectField>
                <SelectField name="school" label="学校" placeholder="请选择学校">{['清华大学','北京大学','上海交通大学','复旦大学']}</SelectField>
                <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>
            </Form>
        </Page>
    );
})
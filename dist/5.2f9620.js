webpackJsonp([5],{"./containers/Form/index.js":function(e,l,t){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(l,"__esModule",{value:!0});var n=t("../node_modules/babel-runtime/core-js/promise.js"),c=a(n),r=t("./containers/Page/index.js"),m=a(r),i=t("./components/Code/index.js"),u=a(i),o=t("../node_modules/react-router/es/index.js"),d=t("../node_modules/candy-mobile/lib/index.js");l.default=(0,o.withRouter)(function(l){var t=l.history;return e.createElement(m.default,null,e.createElement("div",{className:"ct-page__title"},"普通表单："),e.createElement(u.default,null,'\n<Form submit={(data)=>{\n    console.log(data);\n    return new Promise((reslove,reject)=>{\n        setTimeout(function(){\n            new Toast(\'提交成功\',{\n                type:\'success\',\n                removeCallback(){\n                    history.replace(\'/\');\n                }\n            });\n            reslove();\n        },2000);\n    });\n}}>\n    <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>\n    <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>\n    <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>\n    <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>\n    <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>\n    <SelectField name="like" label="爱好" rule="req">{\n        [\n            [\n                {value:1,text:\'小说\'},\n                {value:2,text:\'诗歌\'},\n                {value:3,text:\'报告文学\'}\n            ],\n            [\n                {value:4,text:\'看电影\'},\n                {value:5,text:\'踢足球\'},\n                {value:6,text:\'打游戏\'},\n                {value:7,text:\'户外运动\'}\n            ]\n        ]\n    }</SelectField>\n    <SelectField name="school" label="学校" placeholder="请选择学校">{[\'清华大学\',\'北京大学\',\'上海交通大学\',\'复旦大学\']}</SelectField>\n    <SelectDateField name="date" label="出生日期"></SelectDateField>\n    <SelectDateTimeField name="date_time" label="报名时间"></SelectDateTimeField>\n    <SelectTimeField name="time" label="开始时间"></SelectTimeField>\n    <CheckList name="eat" label="爱吃">{[\'牛奶\',\'香蕉\']}</CheckList>\n    <CheckList name="like" label="爱玩" mult>{[\'游戏\',\'睡觉\']}</CheckList>\n    <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>\n</Form>\n            '),e.createElement(d.Form,{submit:function(e){return console.log(e),new c.default(function(e,l){setTimeout(function(){new d.Toast("提交成功",{type:"success",removeCallback:function(){t.replace("/")}}),e()},2e3)})}},e.createElement(d.Input,{name:"name",rule:"req email",label:"用户名",placeholder:"请输入用户名"}),e.createElement(d.Input,{name:"tel",rule:"req tel",label:"手机号",placeholder:"请输入手机号"}),e.createElement(d.Input,{type:"password",name:"pwd",rule:"req 6-10",label:"密码",placeholder:"请输入密码"}),e.createElement(d.SwitchField,{name:"sex",label:"性别",openLabel:"男",closeLabel:"女"}),e.createElement(d.Input,{type:"textarea",name:"des",rule:"req 1-100",label:"简介",placeholder:"请输入简介",maxLength:100}),e.createElement(d.SelectField,{name:"like",label:"爱好",rule:"req"},[[{value:1,text:"小说"},{value:2,text:"诗歌"},{value:3,text:"报告文学"}],[{value:4,text:"看电影"},{value:5,text:"踢足球"},{value:6,text:"打游戏"},{value:7,text:"户外运动"}]]),e.createElement(d.SelectField,{name:"school",label:"学校",placeholder:"请选择学校"},["清华大学","北京大学","上海交通大学","复旦大学"]),e.createElement(d.SelectDateField,{name:"date",label:"出生日期"}),e.createElement(d.SelectDateTimeField,{name:"date_time",label:"报名时间"}),e.createElement(d.SelectTimeField,{name:"time",label:"开始时间"}),e.createElement(d.CheckList,{name:"eat",label:"爱吃"},["牛奶","香蕉"]),e.createElement(d.CheckList,{name:"like",label:"爱玩",mult:!0},["游戏","睡觉"]),e.createElement(d.SubmitButton,{loadingText:"正在提交表单..."},"完成")),e.createElement("div",{className:"ct-page__title"},"inline表单："),e.createElement(u.default,null,'\n<Form inline submit={(data)=>{\n    console.log(data);\n    return new Promise((reslove,reject)=>{\n        setTimeout(function(){\n            new Toast(\'提交成功\',{\n                type:\'success\',\n                removeCallback(){\n                    history.replace(\'/\');\n                }\n            });\n            reslove();\n        },2000);\n    });\n}}>\n    <Input name="name" rule="req email" label="用户名" placeholder="请输入用户名"/>\n    <Input name="tel" rule="req tel" label="手机号" placeholder="请输入手机号"/>\n    <Input type="password" name="pwd" rule="req 6-10" label="密码" placeholder="请输入密码"/>\n    <SwitchField name="sex" label="性别" openLabel="男" closeLabel="女"></SwitchField>\n    <Input type="textarea" name="des" rule="req 1-100" label="简介" placeholder="请输入简介" maxLength={100}/>\n    <SelectField name="like" label="爱好" rule="req">{\n        [\n            [\n                {value:1,text:\'小说\'},\n                {value:2,text:\'诗歌\'},\n                {value:3,text:\'报告文学\'}\n            ],\n            [\n                {value:4,text:\'看电影\'},\n                {value:5,text:\'踢足球\'},\n                {value:6,text:\'打游戏\'},\n                {value:7,text:\'户外运动\'}\n            ]\n        ]\n    }</SelectField>\n    <SelectField name="school" label="学校" placeholder="请选择学校">{[\'清华大学\',\'北京大学\',\'上海交通大学\',\'复旦大学\']}</SelectField>\n    <SelectDateField name="date" label="出生日期"></SelectDateField>\n    <SelectDateTimeField name="date_time" label="报名时间"></SelectDateTimeField>\n    <SelectTimeField name="time" label="开始时间"></SelectTimeField>\n    <CheckList name="eat" label="爱吃">{[\'牛奶\',\'香蕉\']}</CheckList>\n    <CheckList name="like" label="爱玩" mult>{[\'游戏\',\'睡觉\']}</CheckList>\n    <SubmitButton loadingText="正在提交表单...">完成</SubmitButton>\n</Form>\n            '),e.createElement(d.Form,{inline:!0,submit:function(e){return console.log(e),new c.default(function(e,l){setTimeout(function(){new d.Toast("提交成功",{type:"success",removeCallback:function(){t.replace("/")}}),e()},2e3)})}},e.createElement(d.Input,{name:"name",rule:"req email",label:"用户名",placeholder:"请输入用户名"}),e.createElement(d.Input,{name:"tel",rule:"req tel",label:"手机号",placeholder:"请输入手机号"}),e.createElement(d.Input,{type:"password",name:"pwd",rule:"req 6-10",label:"密码",placeholder:"请输入密码"}),e.createElement(d.SwitchField,{name:"sex",label:"性别",openLabel:"男",closeLabel:"女"}),e.createElement(d.Input,{type:"textarea",name:"des",rule:"req 1-100",label:"简介",placeholder:"请输入简介",maxLength:100}),e.createElement(d.SelectField,{name:"like",label:"爱好",rule:"req"},[[{value:1,text:"小说"},{value:2,text:"诗歌"},{value:3,text:"报告文学"}],[{value:4,text:"看电影"},{value:5,text:"踢足球"},{value:6,text:"打游戏"},{value:7,text:"户外运动"}]]),e.createElement(d.SelectField,{name:"school",label:"学校",placeholder:"请选择学校"},["清华大学","北京大学","上海交通大学","复旦大学"]),e.createElement(d.SelectDateField,{name:"date",label:"出生日期"}),e.createElement(d.SelectDateTimeField,{name:"date_time",label:"报名时间"}),e.createElement(d.SelectTimeField,{name:"time",label:"开始时间"}),e.createElement(d.CheckList,{name:"eat",label:"爱吃"},["牛奶","香蕉"]),e.createElement(d.CheckList,{name:"like",label:"爱玩",mult:!0},["游戏","睡觉"]),e.createElement(d.SubmitButton,{loadingText:"正在提交表单..."},"完成")))})}).call(l,t("../node_modules/react/react.js"))}});
//# sourceMappingURL=5.2f9620.js.map
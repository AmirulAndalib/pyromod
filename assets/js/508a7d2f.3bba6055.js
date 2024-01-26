"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{6026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(5893),i=a(1151);const s={title:"Examples",sidebar_position:5},r=void 0,o={id:"getting-started/examples",title:"Examples",description:"Awaiting a single message from a specific chat",source:"@site/docs/getting-started/examples.md",sourceDirName:"getting-started",slug:"/getting-started/examples",permalink:"/getting-started/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/usernein/pyromod/tree/master/docs/docs/getting-started/examples.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Examples",sidebar_position:5},sidebar:"gettingStartedSidebar",previous:{title:"Configuration",permalink:"/getting-started/configuration"}},c={},l=[{value:"Awaiting a single message from a specific chat",id:"awaiting-a-single-message-from-a-specific-chat",level:2},{value:"Awaiting a single message from a specific user in a specific chat",id:"awaiting-a-single-message-from-a-specific-user-in-a-specific-chat",level:2},{value:"Asking the user a question then await for the response",id:"asking-the-user-a-question-then-await-for-the-response",level:2},{value:"Asking the user a question then await for the response, with a timeout",id:"asking-the-user-a-question-then-await-for-the-response-with-a-timeout",level:2},{value:"Full handler example, getting user&#39;s name and age with bound method Chat.ask",id:"full-handler-example-getting-users-name-and-age-with-bound-method-chatask",level:2},{value:"Easier inline keyboard creation",id:"easier-inline-keyboard-creation",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"awaiting-a-single-message-from-a-specific-chat",children:"Awaiting a single message from a specific chat"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"response = await client.listen(chat_id=chat_id)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"awaiting-a-single-message-from-a-specific-user-in-a-specific-chat",children:"Awaiting a single message from a specific user in a specific chat"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"response = await client.listen(chat_id=chat_id, user_id=user_id)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"asking-the-user-a-question-then-await-for-the-response",children:"Asking the user a question then await for the response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"response = await client.ask(chat_id=chat_id, text='What is your name?')\n"})}),"\n",(0,n.jsx)(t.h2,{id:"asking-the-user-a-question-then-await-for-the-response-with-a-timeout",children:"Asking the user a question then await for the response, with a timeout"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"try:\n    response = await client.ask(chat_id=chat_id, text='What is your name?', timeout=10)\nexcept ListenerTimeout:\n    await message.reply('You took too long to answer.')\n"})}),"\n",(0,n.jsx)(t.h2,{id:"full-handler-example-getting-users-name-and-age-with-bound-method-chatask",children:"Full handler example, getting user's name and age with bound method Chat.ask"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from pyromod import Client, Message\nfrom pyrogram import filters\n\n\n@Client.on_message(filters.command('form'))\nasync def on_form(client: Client, message: Message):\n    chat = message.chat\n\n    name = await chat.ask('What is your name?', filters=filters.text)\n    age = await chat.ask('What is your age?', filters=filters.text)\n\n    await message.reply(f'Your name is {name.text} and you are {age.text} years old.')\n"})}),"\n",(0,n.jsx)(t.h2,{id:"easier-inline-keyboard-creation",children:"Easier inline keyboard creation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from pyromod.helpers import ikb\n\nkeyboard = ikb([\n    [('Button 1', 'callback_data_1'), ('Button 2', 'callback_data_2')],\n    [('Another button', 't.me/pyromodchat', 'url')]\n])\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(7294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
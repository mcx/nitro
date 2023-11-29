"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1558],{12882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=n(85893),r=n(11151);const o={title:"Prompt Role Support",description:"Setting up Nitro prompts to build an AI assistant."},i=void 0,a={id:"features/prompt",title:"Prompt Role Support",description:"Setting up Nitro prompts to build an AI assistant.",source:"@site/docs/features/prompt.md",sourceDirName:"features",slug:"/features/prompt",permalink:"/features/prompt",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/prompt.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1701253610,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{title:"Prompt Role Support",description:"Setting up Nitro prompts to build an AI assistant."},sidebar:"docsSidebar",previous:{title:"Warming Up Model",permalink:"/features/warmup"},next:{title:"Nitro with Jan",permalink:"/examples/jan"}},l={},p=[{value:"System Prompt",id:"system-prompt",level:2},{value:"User Prompt",id:"user-prompt",level:2},{value:"Assistant Prompt",id:"assistant-prompt",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"Prompt Configuration",id:"prompt-configuration",level:3},{value:"Testing the Assistant",id:"testing-the-assistant",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"System, user, and assistant prompt is crucial for effectively utilizing the Large Language Model. These prompts work together to create a coherent and functional conversational flow."}),"\n",(0,s.jsxs)(t.p,{children:["Nitro enables developers to configure dialogs and implement advanced prompt engineering, such as ",(0,s.jsx)(t.a,{href:"https://arxiv.org/abs/2005.14165",children:"few-shot learning"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"system-prompt",children:"System Prompt"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Definition"}),": Sets up the assistant's behavior."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Example"}),": ",(0,s.jsx)(t.code,{children:'pre_prompt: "You are a Pirate"'})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"user-prompt",children:"User Prompt"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Definition"}),": Requests or comments directed towards the assistant, forming the conversation's core."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Example"}),": ",(0,s.jsx)(t.code,{children:'user_prompt: "USER:"'})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"assistant-prompt",children:"Assistant Prompt"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Definition"}),": Responses generated by the assistant, including stored responses or developer-provided examples."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Example"}),": ",(0,s.jsx)(t.code,{children:'ai_prompt: "ASSISTANT:"'})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,s.jsx)(t.p,{children:'To illustrate, let\'s create a "Pirate assistant":'}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'NOTE: "ai_prompt", "user_prompt" and "system_prompt" are prefixes indicating the role. Configure them based on your model.'}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"prompt-configuration",children:"Prompt Configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Prompt Configuration" {6,7,8}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "ctx_len": 128,\n    "ngl": 100,\n    "pre_prompt": "You are a Pirate. Using drunk language with a lot of Arr...",\n    "system_prompt": "ASSISTANT\'S RULE: ",\n    "user_prompt": "USER:",\n    "ai_prompt": "ASSISTANT: "\n  }\'\n'})}),"\n",(0,s.jsx)(t.h3,{id:"testing-the-assistant",children:"Testing the Assistant"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Pirate Assistant"',children:'curl http://localhost:3928/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "messages": [\n      {\n        "role": "user",\n        "content": "Hello, who is your captain?"\n      },\n    ]\n  }\'\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
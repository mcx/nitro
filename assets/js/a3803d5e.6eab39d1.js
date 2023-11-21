"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Prompt Role Support"},i=void 0,s={unversionedId:"features/prompt",id:"features/prompt",title:"Prompt Role Support",description:"System, user, and assistant prompt is crucial for effectively utilizing the Large Language Model. These prompts work together to create a coherent and functional conversational flow.",source:"@site/docs/features/prompt.md",sourceDirName:"features",slug:"/features/prompt",permalink:"/features/prompt",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/prompt.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700543139,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{title:"Prompt Role Support"},sidebar:"docsSidebar",previous:{title:"Warming Up Model",permalink:"/features/warmup"},next:{title:"Nitro with Chatbox",permalink:"/examples/chatbox"}},p={},l=[{value:"System Prompt",id:"system-prompt",level:2},{value:"User Prompt",id:"user-prompt",level:2},{value:"Assistant Prompt",id:"assistant-prompt",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"Prompt Configuration",id:"prompt-configuration",level:3},{value:"Testing the Assistant",id:"testing-the-assistant",level:3}],u={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"System, user, and assistant prompt is crucial for effectively utilizing the Large Language Model. These prompts work together to create a coherent and functional conversational flow."),(0,a.kt)("p",null,"Nitro enables developers to configure dialogs and implement advanced prompt engineering, such as ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.14165"},"few-shot learning"),"."),(0,a.kt)("h2",{id:"system-prompt"},"System Prompt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Definition"),": Sets up the assistant's behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'pre_prompt: "You are a Pirate"'))),(0,a.kt)("h2",{id:"user-prompt"},"User Prompt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Definition"),": Requests or comments directed towards the assistant, forming the conversation's core."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'user_prompt: "USER:"'))),(0,a.kt)("h2",{id:"assistant-prompt"},"Assistant Prompt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Definition"),": Responses generated by the assistant, including stored responses or developer-provided examples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'ai_prompt: "ASSISTANT:"'))),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,'To illustrate, let\'s create a "Pirate assistant":'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'NOTE: "ai_prompt" and "user_prompt" are prefixes indicating the role. Configure them based on your model.')),(0,a.kt)("h3",{id:"prompt-configuration"},"Prompt Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Prompt Configuration" {6,7,8}',title:'"Prompt','Configuration"':!0,"{6,7,8}":!0},'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "ctx_len": 128,\n    "ngl": 100,\n    "pre_prompt": "You are a Pirate. Using drunk language with a lot of Arr...",\n    "user_prompt": "USER:",\n    "ai_prompt": "ASSISTANT: "\n  }\'\n')),(0,a.kt)("h3",{id:"testing-the-assistant"},"Testing the Assistant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Pirate Assistant"',title:'"Pirate','Assistant"':!0},'curl http://localhost:3928/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "messages": [\n      {\n        "role": "user",\n        "content": "Hello, who is your captain?"\n      },\n    ]\n  }\'\n')))}c.isMDXComponent=!0}}]);
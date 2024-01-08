"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7163],{96219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151);const o={title:"Multithreading",description:"Nitro utilizes multithreading to optimize hardware usage.",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},s=void 0,a={id:"features/multi-thread",title:"Multithreading",description:"Nitro utilizes multithreading to optimize hardware usage.",source:"@site/docs/features/multi-thread.md",sourceDirName:"features",slug:"/features/multi-thread",permalink:"/features/multi-thread",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/multi-thread.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1704706666,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Multithreading",description:"Nitro utilizes multithreading to optimize hardware usage.",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Nitro Features",permalink:"/features/feat"},next:{title:"Continuous Batching",permalink:"/features/cont-batch"}},l={},d=[{value:"Enabling Multi-Threads on Nitro",id:"enabling-multi-threads-on-nitro",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Multithreading in programming allows concurrent task execution, improving efficiency and responsiveness. It's key for optimizing hardware and application performance."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Effective multithreading offers:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Faster Performance."}),"\n",(0,r.jsx)(t.li,{children:"Responsive IO."}),"\n",(0,r.jsx)(t.li,{children:"Deadlock Prevention."}),"\n",(0,r.jsx)(t.li,{children:"Resource Optimization."}),"\n",(0,r.jsx)(t.li,{children:"Asynchronous Programming Support."}),"\n",(0,r.jsx)(t.li,{children:"Scalability Enhancement."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more information on threading, visit ",(0,r.jsx)(t.a,{href:"https://github.com/drogonframework/drogon/wiki/ENG-FAQ-1-Understanding-drogon-threading-model",children:"Drogon's Documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"enabling-multi-threads-on-nitro",children:"Enabling Multi-Threads on Nitro"}),"\n",(0,r.jsx)(t.p,{children:"To increase the number of threads used by Nitro, use the following command syntax:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Nitro deploy server format"',children:"nitro [thread_num] [host] [port]\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"thread_num:"})," Specifies the number of threads for the Nitro server."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"host:"})," The host address normally ",(0,r.jsx)(t.code,{children:"127.0.0.1"})," (localhost) or ",(0,r.jsx)(t.code,{children:"0.0.0.0"})," (all interfaces)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"port:"})," The port number where Nitro is to be deployed."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To launch Nitro with 4 threads, enter this command in the terminal:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Example"',children:"nitro 4 127.0.0.1 5000\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["After enabling multithreading, monitor your system's performance. Adjust the ",(0,r.jsx)(t.code,{children:"thread_num"})," as needed to optimize throughput and latency based on your workload."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{51701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(85893),o=n(11151);const s={title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput."},a=void 0,c={id:"features/cont-batch",title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput.",source:"@site/docs/features/cont-batch.md",sourceDirName:"features",slug:"/features/cont-batch",permalink:"/features/cont-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/cont-batch.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1701253610,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput."},sidebar:"docsSidebar",previous:{title:"Multithreading",permalink:"/features/multi-thread"},next:{title:"Load and Unload models",permalink:"/features/load-unload"}},r={},l=[{value:"How to use continous batching",id:"how-to-use-continous-batching",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Continuous batching boosts throughput and minimizes latency in large language model (LLM) inference. This technique groups multiple inference requests, significantly improving GPU utilization."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Key Advantages:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Increased Throughput."}),"\n",(0,i.jsx)(t.li,{children:"Reduced Latency."}),"\n",(0,i.jsx)(t.li,{children:"Efficient GPU Use."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Implementation Insight:"})}),"\n",(0,i.jsxs)(t.p,{children:["To evaluate its effectiveness, compare continuous batching with traditional methods. For more details on benchmarking, refer to this ",(0,i.jsx)(t.a,{href:"https://www.anyscale.com/blog/continuous-batching-llm-inference",children:"article"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-continous-batching",children:"How to use continous batching"}),"\n",(0,i.jsxs)(t.p,{children:["Nitro's ",(0,i.jsx)(t.code,{children:"continuous batching"})," feature allows you to combine multiple requests for the same model execution, enhancing throughput and efficiency."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Enable Batching" {6,7}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "cont_batching": true,\n    "n_parallel": 4,\n  }\'\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For optimal performance, ensure that the ",(0,i.jsx)(t.code,{children:"n_parallel"})," value is set to match the ",(0,i.jsx)(t.code,{children:"thread_num"}),", as detailed in the ",(0,i.jsx)(t.a,{href:"/features/multi-thread",children:"Multithreading"})," documentation."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
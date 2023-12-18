"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{51701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(85893),i=t(11151);const a={title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput.",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},s=void 0,c={id:"features/cont-batch",title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput.",source:"@site/docs/features/cont-batch.md",sourceDirName:"features",slug:"/features/cont-batch",permalink:"/features/cont-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/cont-batch.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1702899571,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"Continuous Batching",description:"Nitro's continuous batching combines multiple requests, enhancing throughput.",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Multithreading",permalink:"/features/multi-thread"},next:{title:"Load and Unload models",permalink:"/features/load-unload"}},r={},l=[{value:"How to use continous batching",id:"how-to-use-continous-batching",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Continuous batching boosts throughput and minimizes latency in large language model (LLM) inference. This technique groups multiple inference requests, significantly improving GPU utilization."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Key Advantages:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Increased Throughput."}),"\n",(0,o.jsx)(n.li,{children:"Reduced Latency."}),"\n",(0,o.jsx)(n.li,{children:"Efficient GPU Use."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Implementation Insight:"})}),"\n",(0,o.jsxs)(n.p,{children:["To evaluate its effectiveness, compare continuous batching with traditional methods. For more details on benchmarking, refer to this ",(0,o.jsx)(n.a,{href:"https://www.anyscale.com/blog/continuous-batching-llm-inference",children:"article"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use-continous-batching",children:"How to use continous batching"}),"\n",(0,o.jsxs)(n.p,{children:["Nitro's ",(0,o.jsx)(n.code,{children:"continuous batching"})," feature allows you to combine multiple requests for the same model execution, enhancing throughput and efficiency."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Enable Batching" {6,7}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "cont_batching": true,\n    "n_parallel": 4,\n  }\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For optimal performance, ensure that the ",(0,o.jsx)(n.code,{children:"n_parallel"})," value is set to match the ",(0,o.jsx)(n.code,{children:"thread_num"}),", as detailed in the ",(0,o.jsx)(n.a,{href:"/features/multi-thread",children:"Multithreading"})," documentation."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
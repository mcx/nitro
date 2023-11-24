"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{51701:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(85893),o=t(11151);const a={title:"Continuous Batching"},s=void 0,c={id:"features/cont-batch",title:"Continuous Batching",description:"What is continous batching?",source:"@site/docs/features/cont-batch.md",sourceDirName:"features",slug:"/features/cont-batch",permalink:"/features/cont-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/cont-batch.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700820699,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{title:"Continuous Batching"},sidebar:"docsSidebar",previous:{title:"Multithreading",permalink:"/features/multi-thread"},next:{title:"Load and Unload models",permalink:"/features/load-unload"}},r={},l=[{value:"What is continous batching?",id:"what-is-continous-batching",level:2},{value:"Why Continuous Batching?",id:"why-continuous-batching",level:2},{value:"Benefits of Continuous Batching",id:"benefits-of-continuous-batching",level:2},{value:"How to use continous batching",id:"how-to-use-continous-batching",level:2},{value:"Benchmark and Compare",id:"benchmark-and-compare",level:3}];function u(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"what-is-continous-batching",children:"What is continous batching?"}),"\n",(0,i.jsx)(e.p,{children:"Continuous batching is a powerful technique that significantly boosts throughput in large language model (LLM) inference while minimizing latency. This process dynamically groups multiple inference requests, allowing for more efficient GPU utilization."}),"\n",(0,i.jsx)(e.h2,{id:"why-continuous-batching",children:"Why Continuous Batching?"}),"\n",(0,i.jsx)(e.p,{children:"Traditional static batching methods can lead to underutilization of GPU resources, as they wait for all sequences in a batch to complete before moving on. Continuous batching overcomes this by allowing new sequences to start processing as soon as others finish, ensuring more consistent and efficient GPU usage."}),"\n",(0,i.jsx)(e.h2,{id:"benefits-of-continuous-batching",children:"Benefits of Continuous Batching"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Increased Throughput:"})," Improvement over traditional batching methods."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Reduced Latency:"})," Lower p50 latency, leading to faster response times."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Efficient Resource Utilization:"})," Maximizes GPU memory and computational capabilities."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"how-to-use-continous-batching",children:"How to use continous batching"}),"\n",(0,i.jsxs)(e.p,{children:["Nitro's ",(0,i.jsx)(e.code,{children:"continuous batching"})," feature allows you to combine multiple requests for the same model execution, enhancing throughput and efficiency."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Enable Batching" {6,7}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "cont_batching": true,\n    "n_parallel": 4,\n  }\'\n'})}),"\n",(0,i.jsxs)(e.p,{children:["For optimal performance, ensure that the ",(0,i.jsx)(e.code,{children:"n_parallel"})," value is set to match the ",(0,i.jsx)(e.code,{children:"thread_num"}),", as detailed in the ",(0,i.jsx)(e.a,{href:"/features/multi-thread",children:"Multithreading"})," documentation."]}),"\n",(0,i.jsx)(e.h3,{id:"benchmark-and-compare",children:"Benchmark and Compare"}),"\n",(0,i.jsxs)(e.p,{children:["To understand the impact of continuous batching on your system, perform benchmarks comparing it with traditional batching methods. This ",(0,i.jsx)(e.a,{href:"https://www.anyscale.com/blog/continuous-batching-llm-inference",children:"article"})," will help you quantify improvements in throughput and latency."]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);
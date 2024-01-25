"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[179],{32374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(85893),r=t(11151);const a={title:"Self extend",description:"Self-Extend LLM Context Window Without Tuning",keywords:["long context","longlm","Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},o=void 0,l={id:"features/self-extend",title:"Self extend",description:"Self-Extend LLM Context Window Without Tuning",source:"@site/docs/features/self-extend.md",sourceDirName:"features",slug:"/features/self-extend",permalink:"/features/self-extend",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/self-extend.md",tags:[],version:"current",lastUpdatedBy:"hiro",lastUpdatedAt:1706160515,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"Self extend",description:"Self-Extend LLM Context Window Without Tuning",keywords:["long context","longlm","Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Logging",permalink:"/features/log"},next:{title:"GBNF Grammar",permalink:"/features/grammar"}},s={},d=[{value:"Enhancing LLMs with Self-Extend",id:"enhancing-llms-with-self-extend",level:2},{value:"Activating Self-Extend for LLMs",id:"activating-self-extend-for-llms",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"enhancing-llms-with-self-extend",children:"Enhancing LLMs with Self-Extend"}),"\n",(0,i.jsx)(n.p,{children:"Self-Extend offers an innovative approach to increase the context window of Large Language Models (LLMs) without the usual need for re-tuning. This method adapts the attention mechanism during the inference phase and eliminates the necessity for additional training or fine-tuning."}),"\n",(0,i.jsxs)(n.p,{children:["For in-depth technical insights, refer to their research ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/2401.01325.pdf",children:"paper"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"activating-self-extend-for-llms",children:"Activating Self-Extend for LLMs"}),"\n",(0,i.jsx)(n.p,{children:"To activate the Self-Extend feature while loading your model, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Enable Self-Extend" {6,7}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 8192,\n    "grp_attn_n": 4,\n    "grp_attn_w": 2048,\n  }\'\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For optimal performance, ",(0,i.jsx)(n.code,{children:"grp_attn_w"})," should be as large as possible, but smaller than the training context length."]}),"\n",(0,i.jsxs)(n.li,{children:["Setting  ",(0,i.jsx)(n.code,{children:"grp_attn_n"})," between 2 to 4 is recommended for peak efficiency. Higher values may result in increased incoherence in output."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
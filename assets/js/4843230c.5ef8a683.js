"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[411],{25075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var i=t(85893),a=t(11151);const d={title:"Embedding",description:"Inference engine for embedding, the same as OpenAI's",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},s=void 0,r={id:"features/embed",title:"Embedding",description:"Inference engine for embedding, the same as OpenAI's",source:"@site/docs/features/embed.md",sourceDirName:"features",slug:"/features/embed",permalink:"/features/embed",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/embed.md",tags:[],version:"current",lastUpdatedBy:"hiro",lastUpdatedAt:1703172434,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{title:"Embedding",description:"Inference engine for embedding, the same as OpenAI's",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Chat Completion",permalink:"/features/chat"},next:{title:"Nitro Features",permalink:"/features/feat"}},o={},l=[{value:"Activating Embedding Feature",id:"activating-embedding-feature",level:2},{value:"Embedding Request",id:"embedding-request",level:3},{value:"Embedding Reponse",id:"embedding-reponse",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Embeddings are lists of numbers (floats). To find how similar two embeddings are, we measure the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cosine_similarity",children:"distance"})," between them."]}),"\n",(0,i.jsx)(n.h2,{id:"activating-embedding-feature",children:"Activating Embedding Feature"}),"\n",(0,i.jsxs)(n.p,{children:["To utilize the embedding feature, include the JSON parameter ",(0,i.jsx)(n.code,{children:'"embedding": true'})," in your ",(0,i.jsx)(n.a,{href:"/features/load-unload",children:"load model request"}),". This action enables Nitro to process inferences with embedding capabilities."]}),"\n",(0,i.jsx)(n.h3,{id:"embedding-request",children:"Embedding Request"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s an example showing how to get the embedding result from the model:"}),"\n",(0,i.jsx)("div",{class:"code-snippet-left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Nitro" {1}',children:'curl http://localhost:3928/v1/embeddings \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "input": "Hello",\n        "model":"Llama-2-7B-Chat-GGUF",\n        "encoding_format": "float"\n    }\'\n\n'})})}),"\n",(0,i.jsx)("div",{class:"code-snippet-right",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="OpenAI request" {1}',children:'curl https://api.openai.com/v1/embeddings \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "input": "Hello",\n    "model": "text-embedding-ada-002",\n    "encoding_format": "float"\n  }\'\n'})})}),"\n",(0,i.jsx)(n.h3,{id:"embedding-reponse",children:"Embedding Reponse"}),"\n",(0,i.jsxs)(n.p,{children:["The example response used the output from model ",(0,i.jsx)(n.a,{href:"https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/tree/main",children:"llama2 Chat 7B Q5 (GGUF)"})," loaded to Nitro server."]}),"\n",(0,i.jsx)("div",{class:"code-snippet-left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="Nitro"',children:'{\n    "embedding": [\n      -0.9874749,\n      0.2965493,\n      ...\n      -0.253227\n    ],\n    "index": 0,\n    "object": "embedding"\n}\n'})})}),"\n",(0,i.jsx)("div",{class:"code-snippet-right",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="OpenAI"',children:'{\n  "embedding": [\n    0.0023064255,\n    -0.009327292,\n    ....\n    -0.0028842222,\n  ],\n  "index": 0,\n  "object": "embedding"\n}\n'})})}),"\n",(0,i.jsxs)(n.p,{children:["The embedding feature in Nitro demonstrates a high level of compatibility with OpenAI. For more detailed information and advanced use cases, refer to the comprehensive ",(0,i.jsx)(n.a,{href:"https://nitro.jan.ai/api-reference",children:"API Reference"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},d=i.createContext(a);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
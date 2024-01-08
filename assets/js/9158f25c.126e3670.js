"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4450],{81020:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=l(85893),d=l(11151);const o={title:"Load and Unload models",description:"Nitro loads and unloads local AI models (local LLMs).",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},r=void 0,s={id:"features/load-unload",title:"Load and Unload models",description:"Nitro loads and unloads local AI models (local LLMs).",source:"@site/docs/features/load-unload.md",sourceDirName:"features",slug:"/features/load-unload",permalink:"/features/load-unload",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/load-unload.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1704706666,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Load and Unload models",description:"Nitro loads and unloads local AI models (local LLMs).",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Continuous Batching",permalink:"/features/cont-batch"},next:{title:"Warming Up Model",permalink:"/features/warmup"}},a={},c=[{value:"Load model",id:"load-model",level:2},{value:"Enabling GPU Inference",id:"enabling-gpu-inference",level:3},{value:"Unload model",id:"unload-model",level:2},{value:"Status",id:"status",level:2},{value:"Table of parameters",id:"table-of-parameters",level:3}];function i(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"load-model",children:"Load model"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"loadmodel"})," in Nitro lets you load a local model into the server. It's an upgrade from ",(0,t.jsx)(n.code,{children:"llama.cpp"}),", offering more features and customization options."]}),"\n",(0,t.jsx)(n.p,{children:"You can load the model using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Load Model" {1}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n  }\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"For more detail on the loading model, please refer to [Table of parameters].(#table-of-parameters)."}),"\n",(0,t.jsx)(n.h3,{id:"enabling-gpu-inference",children:"Enabling GPU Inference"}),"\n",(0,t.jsx)(n.p,{children:"To enable GPU inference in Nitro, a simple POST request is used. This request will instruct Nitro to load the specified model into the GPU, significantly boosting the inference throughput."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="GPU enable" {5}',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "ngl": 100,\n  }\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can adjust the ",(0,t.jsx)(n.code,{children:"ngl"})," parameter based on your requirements and GPU capabilities."]}),"\n",(0,t.jsx)(n.h2,{id:"unload-model",children:"Unload model"}),"\n",(0,t.jsxs)(n.p,{children:["To unload a model, you can use a similar ",(0,t.jsx)(n.code,{children:"curl"})," command as loading the model, adjusting the endpoint to ",(0,t.jsx)(n.code,{children:"/unloadmodel."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Unload the model" {1}',children:"curl http://localhost:3928/inferences/llamacpp/unloadmodel\n"})}),"\n",(0,t.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modelStatus"})," function provides the current status of the model, including whether it is loaded and its properties. This function offers improved monitoring capabilities compared to ",(0,t.jsx)(n.code,{children:"llama.cpp"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Check Model Status" {1}',children:"curl http://localhost:3928/inferences/llamacpp/modelstatus\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you load the model correctly, the response would be"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Load Model Sucessfully"',children:'{"message":"Model loaded successfully", "code": "ModelloadedSuccessfully"}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In case you got error while loading models. Please check for the correct model path."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Load Model Failed"',children:'{"message":"No model loaded", "code": "NoModelLoaded"}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"table-of-parameters",children:"Table of parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"llama_model_path"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"The file path to the LLaMA model."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ngl"})}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"The number of GPU layers to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ctx_len"})}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"The context length for the model operations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"embedding"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Whether to use embedding in the model."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"n_parallel"})}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"The number of parallel operations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cont_batching"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Whether to use continuous batching."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cpu_threads"})}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"The number of threads for CPU inference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user_prompt"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"The prompt to use for the user."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ai_prompt"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"The prompt to use for the AI assistant."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"system_prompt"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"The prompt for system rules."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pre_prompt"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"The prompt to use for internal configuration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clean_cache_threshold"})}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Number of chats that will trigger clean cache action."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>r});var t=l(67294);const d={},o=t.createContext(d);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
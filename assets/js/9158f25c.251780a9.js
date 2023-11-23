"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,g=u["".concat(i,".").concat(c)]||u[c]||s[c]||r;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Load and Unload models"},o=void 0,d={unversionedId:"features/load-unload",id:"features/load-unload",title:"Load and Unload models",description:"Load model",source:"@site/docs/features/load-unload.md",sourceDirName:"features",slug:"/features/load-unload",permalink:"/features/load-unload",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/load-unload.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700715299,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Load and Unload models"},sidebar:"docsSidebar",previous:{title:"Continuous Batching",permalink:"/features/cont-batch"},next:{title:"Warming Up Model",permalink:"/features/warmup"}},i={},p=[{value:"Load model",id:"load-model",level:2},{value:"Enabling GPU Inference",id:"enabling-gpu-inference",level:3},{value:"Unload model",id:"unload-model",level:2},{value:"Status",id:"status",level:2},{value:"Table of parameters",id:"table-of-parameters",level:3}],m={toc:p},u="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"load-model"},"Load model"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"loadmodel")," in Nitro lets you load a local model into the server. It's an upgrade from ",(0,l.kt)("inlineCode",{parentName:"p"},"llama.cpp"),", offering more features and customization options."),(0,l.kt)("p",null,"You can load the model using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Load Model" {1}',title:'"Load','Model"':!0,"{1}":!0},'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n  }\'\n')),(0,l.kt)("p",null,"For more detail on the loading model, please refer to ","[Table of parameters]",".(#table-of-parameters)."),(0,l.kt)("h3",{id:"enabling-gpu-inference"},"Enabling GPU Inference"),(0,l.kt)("p",null,"To enable GPU inference in Nitro, a simple POST request is used. This request will instruct Nitro to load the specified model into the GPU, significantly boosting the inference throughput."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="GPU enable" {5}',title:'"GPU','enable"':!0,"{5}":!0},'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "ngl": 100,\n  }\'\n')),(0,l.kt)("p",null,"You can adjust the ",(0,l.kt)("inlineCode",{parentName:"p"},"ngl")," parameter based on your requirements and GPU capabilities."),(0,l.kt)("h2",{id:"unload-model"},"Unload model"),(0,l.kt)("p",null,"To unload a model, you can use a similar ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," command as loading the model, adjusting the endpoint to ",(0,l.kt)("inlineCode",{parentName:"p"},"/unloadmodel.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Unload the model" {1}',title:'"Unload',the:!0,'model"':!0,"{1}":!0},"curl http://localhost:3928/inferences/llamacpp/unloadmodel\n")),(0,l.kt)("h2",{id:"status"},"Status"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"modelStatus")," function provides the current status of the model, including whether it is loaded and its properties. This function offers improved monitoring capabilities compared to ",(0,l.kt)("inlineCode",{parentName:"p"},"llama.cpp"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Check Model Status" {1}',title:'"Check',Model:!0,'Status"':!0,"{1}":!0},"curl http://localhost:3928/inferences/llamacpp/modelstatus\n")),(0,l.kt)("p",null,"If you load the model correctly, the response would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Load Model Sucessfully"',title:'"Load',Model:!0,'Sucessfully"':!0},'{"message":"Model loaded successfully", "code": "ModelloadedSuccessfully"}\n')),(0,l.kt)("p",null,"In case you got error while loading models. Please check for the correct model path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Load Model Failed"',title:'"Load',Model:!0,'Failed"':!0},'{"message":"No model loaded", "code": "NoModelLoaded"}\n')),(0,l.kt)("h3",{id:"table-of-parameters"},"Table of parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"llama_model_path")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The file path to the LLaMA model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ngl")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of GPU layers to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ctx_len")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The context length for the model operations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"embedding")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use embedding in the model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n_parallel")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of parallel operations. Uses Drogon thread count if not set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cont_batching")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use continuous batching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user_prompt")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The prompt to use for the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ai_prompt")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The prompt to use for the AI assistant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"system_prompt")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The prompt for system rules.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pre_prompt")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The prompt to use for internal configuration.")))))}s.isMDXComponent=!0}}]);
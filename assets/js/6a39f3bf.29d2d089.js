"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(d,r(r({ref:t},s),{},{components:n})):a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Continuous Batching"},r=void 0,c={unversionedId:"features/cont-batch",id:"features/cont-batch",title:"Continuous Batching",description:"What is continous batching?",source:"@site/docs/features/cont-batch.md",sourceDirName:"features",slug:"/features/cont-batch",permalink:"/features/cont-batch",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/cont-batch.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700715299,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Continuous Batching"},sidebar:"docsSidebar",previous:{title:"Multithreading",permalink:"/features/multi-thread"},next:{title:"Load and Unload models",permalink:"/features/load-unload"}},l={},u=[{value:"What is continous batching?",id:"what-is-continous-batching",level:2},{value:"Why Continuous Batching?",id:"why-continuous-batching",level:2},{value:"Benefits of Continuous Batching",id:"benefits-of-continuous-batching",level:2},{value:"How to use continous batching",id:"how-to-use-continous-batching",level:2},{value:"Benchmark and Compare",id:"benchmark-and-compare",level:3}],s={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-continous-batching"},"What is continous batching?"),(0,o.kt)("p",null,"Continuous batching is a powerful technique that significantly boosts throughput in large language model (LLM) inference while minimizing latency. This process dynamically groups multiple inference requests, allowing for more efficient GPU utilization."),(0,o.kt)("h2",{id:"why-continuous-batching"},"Why Continuous Batching?"),(0,o.kt)("p",null,"Traditional static batching methods can lead to underutilization of GPU resources, as they wait for all sequences in a batch to complete before moving on. Continuous batching overcomes this by allowing new sequences to start processing as soon as others finish, ensuring more consistent and efficient GPU usage."),(0,o.kt)("h2",{id:"benefits-of-continuous-batching"},"Benefits of Continuous Batching"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Increased Throughput:")," Improvement over traditional batching methods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduced Latency:")," Lower p50 latency, leading to faster response times."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Efficient Resource Utilization:")," Maximizes GPU memory and computational capabilities.")),(0,o.kt)("h2",{id:"how-to-use-continous-batching"},"How to use continous batching"),(0,o.kt)("p",null,"Nitro's ",(0,o.kt)("inlineCode",{parentName:"p"},"continuous batching")," feature allows you to combine multiple requests for the same model execution, enhancing throughput and efficiency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Enable Batching" {6,7}',title:'"Enable','Batching"':!0,"{6,7}":!0},'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 512,\n    "cont_batching": true,\n    "n_parallel": 4,\n  }\'\n')),(0,o.kt)("p",null,"For optimal performance, ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"n_parallel")," value is set to match the ",(0,o.kt)("inlineCode",{parentName:"p"},"thread_num"),", as detailed in the ",(0,o.kt)("a",{parentName:"p",href:"/features/multi-thread"},"Multithreading")," documentation."),(0,o.kt)("h3",{id:"benchmark-and-compare"},"Benchmark and Compare"),(0,o.kt)("p",null,"To understand the impact of continuous batching on your system, perform benchmarks comparing it with traditional batching methods. This ",(0,o.kt)("a",{parentName:"p",href:"https://www.anyscale.com/blog/continuous-batching-llm-inference"},"article")," will help you quantify improvements in throughput and latency."))}h.isMDXComponent=!0}}]);
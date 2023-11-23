"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Warming Up Model"},o=void 0,l={unversionedId:"features/warmup",id:"features/warmup",title:"Warming Up Model",description:"What is Model Warming Up?",source:"@site/docs/features/warmup.md",sourceDirName:"features",slug:"/features/warmup",permalink:"/features/warmup",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/features/warmup.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700718106,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Warming Up Model"},sidebar:"docsSidebar",previous:{title:"Load and Unload models",permalink:"/features/load-unload"},next:{title:"Prompt Role Support",permalink:"/features/prompt"}},s={},p=[{value:"What is Model Warming Up?",id:"what-is-model-warming-up",level:2},{value:"What are the Benefits?",id:"what-are-the-benefits",level:2},{value:"How to Enable Model Warming Up?",id:"how-to-enable-model-warming-up",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-model-warming-up"},"What is Model Warming Up?"),(0,a.kt)("p",null,"Model warming up is the process of running pre-requests through a model to optimize its components for production use. This step is crucial for reducing initialization and optimization delays during the first few inference requests."),(0,a.kt)("h2",{id:"what-are-the-benefits"},"What are the Benefits?"),(0,a.kt)("p",null,"Warming up an AI model offers several key benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced Initial Performance:")," Unlike in ",(0,a.kt)("inlineCode",{parentName:"li"},"llama.cpp"),", where the first inference can be very slow, warming up reduces initial latency, ensuring quicker response times from the start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consistent Response Times:")," Especially beneficial for systems updating models frequently, like those with real-time training, to avoid performance lags with new snapshots.")),(0,a.kt)("h2",{id:"how-to-enable-model-warming-up"},"How to Enable Model Warming Up?"),(0,a.kt)("p",null,"On the Nitro server, model warming up is automatically enabled whenever a new model is loaded. This means that the server handles the warm-up process behind the scenes, ensuring that the model is ready for efficient and effective performance from the first inference request."))}m.isMDXComponent=!0}}]);
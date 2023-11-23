"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Architecture",slug:"/achitecture"},i=void 0,s={unversionedId:"new/architecture",id:"new/architecture",title:"Architecture",description:"Nitro Architecture",source:"@site/docs/new/architecture.md",sourceDirName:"new",slug:"/achitecture",permalink:"/achitecture",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/architecture.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700715299,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Architecture",slug:"/achitecture"}},c={},l=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Inference Server",id:"inference-server",level:2},{value:"Batching",id:"batching",level:2},{value:"Parallel Processing",id:"parallel-processing",level:2},{value:"Drogon Framework",id:"drogon-framework",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nitro Architecture",src:r(95738).Z,width:"1251",height:"346"})),(0,a.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,a.kt)("h2",{id:"inference-server"},"Inference Server"),(0,a.kt)("p",null,"An inference server is a type of server designed to process requests for running large language models and to return predictions. This server acts as the backbone for AI-powered applications, providing real-time execution of models to analyze data and make decisions."),(0,a.kt)("h2",{id:"batching"},"Batching"),(0,a.kt)("p",null,"Batching refers to the process of grouping several tasks and processing them as a single batch. In large language models inference, this means combining multiple inference requests into one batch to improve computational efficiency, leading to quicker response times and higher throughput."),(0,a.kt)("h2",{id:"parallel-processing"},"Parallel Processing"),(0,a.kt)("p",null,"Parallel processing involves executing multiple computations simultaneously. For web servers and applications, this enables the handling of multiple requests at the same time, ensuring high efficiency and preventing delays in request processing."),(0,a.kt)("h2",{id:"drogon-framework"},"Drogon Framework"),(0,a.kt)("p",null,"Drogon is an HTTP application framework based on C++14/17, designed for its speed and simplicity. Utilizing a non-blocking I/O and event-driven architecture, Drogon manages HTTP requests efficiently for high-performance and scalable applications."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Event Loop"),": Drogon uses an event loop to wait for and dispatch events or messages within a program. This allows for handling many tasks asynchronously, without relying on multi-threading."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Threads"),': While the event loop allows for efficient task management, Drogon also employs threads to handle parallel operations. These "drogon threads" process multiple tasks concurrently.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asynchronous Operations"),": The framework supports non-blocking operations, permitting the server to continue processing other tasks while awaiting responses from databases or external services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scalability"),": Drogon's architecture is built to scale, capable of managing numerous connections at once, suitable for applications with high traffic loads.")))}d.isMDXComponent=!0},95738:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture.drawio-a660cbefddbbda18138ef4639fa64167.png"}}]);
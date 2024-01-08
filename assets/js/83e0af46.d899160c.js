"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1542],{2938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=s(85893),i=s(11151);const r={title:"Build From Source",slug:"/build-source",description:"Install Nitro manually",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},c=void 0,d={id:"new/build-source",title:"Build From Source",description:"Install Nitro manually",source:"@site/docs/new/build-source.md",sourceDirName:"new",slug:"/build-source",permalink:"/build-source",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/build-source.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1704706666,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Build From Source",slug:"/build-source",description:"Install Nitro manually",keywords:["Nitro","Jan","fast inference","inference server","local AI","large language model","OpenAI compatible","open source","llama"]},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/install"},next:{title:"Nitro Features",permalink:"/features/feat"}},t={},a=[{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Generate build file",id:"generate-build-file",level:2},{value:"Build the Application",id:"build-the-application",level:2},{value:"Start process",id:"start-process",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"This guide provides step-by-step instructions for building Nitro from source on Linux, macOS, and Windows systems."}),"\n",(0,l.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,l.jsx)(n.p,{children:"First, you need to clone the Nitro repository:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone --recurse https://github.com/janhq/nitro\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If you don't have git, you can download the source code as a file archive from ",(0,l.jsx)(n.a,{href:"https://github.com/janhq/nitro",children:"Nitro GitHub"}),". Each ",(0,l.jsx)(n.a,{href:"https://github.com/caddyserver/caddy/releases",children:"release"})," also has source snapshots."]}),"\n",(0,l.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,l.jsx)(n.p,{children:"Next, let's install the necessary dependencies."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On MacOS with Apple Silicon:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./install_deps.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On Windows:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cmake -S ./nitro_deps -B ./build_deps/nitro_deps\ncmake --build ./build_deps/nitro_deps --config Release\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["This creates a ",(0,l.jsx)(n.code,{children:"build_deps"})," folder."]}),"\n",(0,l.jsx)(n.h2,{id:"generate-build-file",children:"Generate build file"}),"\n",(0,l.jsx)(n.p,{children:"Now, let's generate the build files."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On MacOS, Linux, and Windows:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir build && cd build\ncmake ..\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On MacOS with Intel processors:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir build && cd build\ncmake -DLLAMA_METAL=OFF ..\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On Linux with CUDA:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir build && cd build\ncmake -DLLAMA_CUBLAS=ON ..\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"build-the-application",children:"Build the Application"}),"\n",(0,l.jsx)(n.p,{children:"Time to build Nitro!"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On MacOS:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make -j $(sysctl -n hw.physicalcpu)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On Linux:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make -j $(nproc)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On Windows:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make -j $(%NUMBER_OF_PROCESSORS%)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"start-process",children:"Start process"}),"\n",(0,l.jsx)(n.p,{children:"Finally, let's start Nitro."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On MacOS and Linux:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./nitro\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"On Windows:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd Release\ncopy ..\\..\\build_deps\\_install\\bin\\zlib.dll .\nnitro.exe\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"To verify if the build was successful:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3928/healthz\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var l=s(67294);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
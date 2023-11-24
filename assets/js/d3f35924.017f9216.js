"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1982],{64928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=t(85893),a=t(11151);const s={title:"Quickstart",slug:"/quickstart"},i=void 0,o={id:"new/quickstart",title:"Quickstart",description:"Step 1: Install Nitro",source:"@site/docs/new/quickstart.md",sourceDirName:"new",slug:"/quickstart",permalink:"/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/quickstart.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700820699,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{title:"Quickstart",slug:"/quickstart"},sidebar:"docsSidebar",previous:{title:"About Nitro",permalink:"/docs"},next:{title:"Installation",permalink:"/install"}},r={},c=[{value:"Step 1: Install Nitro",id:"step-1-install-nitro",level:2},{value:"For Linux and MacOS",id:"for-linux-and-macos",level:3},{value:"For Windows",id:"for-windows",level:3},{value:"Step 2: Downloading a Model",id:"step-2-downloading-a-model",level:2},{value:"Step 3: Run Nitro server",id:"step-3-run-nitro-server",level:2},{value:"Step 4: Load model",id:"step-4-load-model",level:2},{value:"Step 5: Making an Inference",id:"step-5-making-an-inference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"step-1-install-nitro",children:"Step 1: Install Nitro"}),"\n",(0,l.jsx)(n.h3,{id:"for-linux-and-macos",children:"For Linux and MacOS"}),"\n",(0,l.jsx)(n.p,{children:"Open your terminal and enter the following command. This will download and install Nitro on your system."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://raw.githubusercontent.com/janhq/nitro/main/install.sh | sudo /bin/bash -\n"})}),"\n",(0,l.jsx)(n.h3,{id:"for-windows",children:"For Windows"}),"\n",(0,l.jsx)(n.p,{children:"Open PowerShell and execute the following command. This will perform the same actions as for Linux and MacOS but is tailored for Windows."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"powershell -Command \"& { Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/janhq/nitro/main/install.bat' -OutFile 'install.bat'; .\\install.bat; Remove-Item -Path 'install.bat' }\"\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"**NOTE:**Installing Nitro will add new files and configurations to your system to enable it to run."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["For a manual installation process, see: ",(0,l.jsx)(n.a,{href:"/install",children:"Install from Source"})]}),"\n",(0,l.jsx)(n.h2,{id:"step-2-downloading-a-model",children:"Step 2: Downloading a Model"}),"\n",(0,l.jsxs)(n.p,{children:["Next, we need to download a model. For this example, we'll use the ",(0,l.jsx)(n.a,{href:"https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/tree/main",children:"Llama2 7B chat model"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Create a ",(0,l.jsx)(n.code,{children:"/model"})," and navigate into it:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir model && cd model\nwget -O llama-2-7b-model.gguf https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q5_K_M.gguf?download=true\n"})}),"\n",(0,l.jsx)(n.h2,{id:"step-3-run-nitro-server",children:"Step 3: Run Nitro server"}),"\n",(0,l.jsx)(n.p,{children:"To start using Nitro, you need to run its server."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Run Nitro server"',children:"nitro\n"})}),"\n",(0,l.jsx)(n.p,{children:"To check if the Nitro server is running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Nitro Health Status"',children:"curl http://localhost:3928/healthz\n"})}),"\n",(0,l.jsx)(n.h2,{id:"step-4-load-model",children:"Step 4: Load model"}),"\n",(0,l.jsx)(n.p,{children:"To load the model to Nitro server, you need to run:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Load model"',children:'curl http://localhost:3928/inferences/llamacpp/loadmodel \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/model/llama-2-7b-model.gguf",\n    "ctx_len": 512,\n    "ngl": 100,\n  }\'\n'})}),"\n",(0,l.jsx)(n.h2,{id:"step-5-making-an-inference",children:"Step 5: Making an Inference"}),"\n",(0,l.jsx)(n.p,{children:"Finally, let's make an actual inference call using Nitro."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"In your terminal, execute:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Nitro Inference"',children:'curl http://localhost:3928/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "messages": [\n      {\n        "role": "user",\n        "content": "Who won the world series in 2020?"\n      },\n    ]\n  }\'\n'})}),"\n",(0,l.jsx)(n.p,{children:"This command sends a request to Nitro, asking it about the 2020 World Series winner."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["As you can see, A key benefit of Nitro is its alignment with ",(0,l.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/text-generation?lang=curl",children:"OpenAI's API structure"}),". Its inference call syntax closely mirrors that of OpenAI's API, facilitating an easier shift for those accustomed to OpenAI's framework."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var l=t(67294);const a={},s=l.createContext(a);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);